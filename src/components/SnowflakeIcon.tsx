"use client";

import Matter from "matter-js";
import { useEffect, useRef } from "react";
import ScrollFloat from "./ScrollFloat";

const tags = [
  "Customer Support",
  "Passion",
  "Positive Experience",
  "Reliability",
  "Quality",
  "Trustworthiness",
  "Customer Focus",
  "Long-Term Relationships",
  "Innovation",
  "Collaboration",
  "Personalization",
];

export default function ValuesSection() {
  const arenaRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const arena = arenaRef.current;
    const canvas = canvasRef.current;
    if (!arena || !canvas) return;

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Body,
      World,
      Events,
      Mouse,
      MouseConstraint,
    } = Matter;

    const SIZE = 340;
    const CX = SIZE / 2;
    const CY = SIZE / 2;
    const R = SIZE / 2 - 4;

    const engine = Engine.create({ gravity: { y: 0 } });
    const world = engine.world;

    // ── Measure actual pill sizes ──
    const pillSizes = tags.map((tag) => {
      const el = document.createElement("div");
      el.style.cssText =
        "position:fixed;visibility:hidden;padding:5px 13px;border-radius:999px;" +
        "font-size:12px;font-weight:700;white-space:nowrap;";
      el.textContent = "✦ " + tag;
      document.body.appendChild(el);
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      el.remove();
      return { w, h };
    });

    // ── Circular boundary walls ──
    const segments = 48;
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      World.add(
        world,
        Bodies.rectangle(
          CX + Math.cos(angle) * (R + 11),
          CY + Math.sin(angle) * (R + 11),
          22,
          22,
          {
            isStatic: true,
            angle,
            collisionFilter: { category: 0x0002, mask: 0x0001 },
          },
        ),
      );
    }

    // ── Physics bodies ──
    const pillBodies = tags.map((_, i) => {
      const { w, h } = pillSizes[i];
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * (R - Math.max(w, h) / 2 - 10);
      const body = Bodies.rectangle(
        CX + Math.cos(angle) * dist,
        CY + Math.sin(angle) * dist,
        w,
        h,
        {
          restitution: 0.75,
          frictionAir: 0.018,
          friction: 0.1,
          chamfer: { radius: h / 2 },
          collisionFilter: { category: 0x0001, mask: 0x0003 },
        },
      );
      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4,
      });
      return body;
    });
    World.add(world, pillBodies);

    // ── DOM pill elements ──
    const pillEls = pillBodies.map((_, i) => {
      const el = document.createElement("div");
      el.style.cssText =
        "position:absolute;background:white;color:#2E2C76;border-radius:999px;" +
        "padding:5px 13px;font-size:12px;font-weight:700;white-space:nowrap;pointer-events:none;user-select:none;";
      el.textContent = "✦ " + tags[i];
      arena.appendChild(el);
      return el;
    });

    // ── Invisible canvas for drag ──
    canvas.width = SIZE;
    canvas.height = SIZE;

    const render = Render.create({
      canvas,
      engine,
      options: {
        width: SIZE,
        height: SIZE,
        wireframes: false,
        background: "transparent",
      },
    });

    const mouse = Mouse.create(canvas);
    const mc = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    World.add(world, mc);
    Render.run(render);

    // ── Sync DOM + keep pills inside circle ──
    Events.on(engine, "afterUpdate", () => {
      pillBodies.forEach((body, i) => {
        const dx = body.position.x - CX;
        const dy = body.position.y - CY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const { w, h } = pillSizes[i];
        const maxDist = R - Math.max(w, h) / 2 - 2;

        if (dist > maxDist) {
          const nx = dx / dist;
          const ny = dy / dist;
          Body.setPosition(body, {
            x: CX + nx * maxDist,
            y: CY + ny * maxDist,
          });
          const dot = body.velocity.x * nx + body.velocity.y * ny;
          Body.setVelocity(body, {
            x: body.velocity.x - 2 * dot * nx,
            y: body.velocity.y - 2 * dot * ny,
          });
        }

        pillEls[i].style.left = body.position.x - w / 2 + "px";
        pillEls[i].style.top = body.position.y - h / 2 + "px";
        pillEls[i].style.transform = `rotate(${body.angle}rad)`;
      });
    });

    // ── Gentle nudges ──
    const interval = setInterval(() => {
      pillBodies.forEach((body) => {
        Body.applyForce(body, body.position, {
          x: (Math.random() - 0.5) * 0.0015,
          y: (Math.random() - 0.5) * 0.0015,
        });
      });
    }, 2500);

    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      clearInterval(interval);
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
      pillEls.forEach((el) => el.remove());
    };
  }, []);

  return (
    <section className="relative w-full min-h-[500px] flex flex-col md:flex-row items-center justify-center overflow-hidden">
      <div className="text-center">
        <ScrollFloat
          animationDuration={0.8}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.06}
          textClassName="text-center text-[#2E2C76]  uppercase heading leading-none tracking-[1%] whitespace-nowrap text-[clamp(80px,22vw,100pc)]"
        >
          VALUES
        </ScrollFloat>
      </div>

      <div className="relative mt-10 md:mt-0 md:absolute md:left-[50%] md:top-[45%] md:-translate-x-1/2 md:-translate-y-1/2">
        <div
          ref={arenaRef}
          className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] rounded-full border border-white shadow-2xl"
          style={{
            position: "relative",
            overflow: "hidden",
            backdropFilter: "blur(1px)",
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "340px",
              height: "340px",
              opacity: 0,
              pointerEvents: "auto",
            }}
          />
        </div>
      </div>
    </section>
  );
}

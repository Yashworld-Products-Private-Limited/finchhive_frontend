"use client";
import { useEffect, useRef } from "react";
import * as Matter from "matter-js";

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

export default function PhysicsPills() {
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

    const SIZE = 380;
    const CX = SIZE / 2;
    const CY = SIZE / 2;
    const R = SIZE / 2 - 4;

    const engine = Engine.create({ gravity: { y: 0 } });
    const world = engine.world;

    // ── Measure pill sizes using hidden DOM elements ──
    const pillSizes = tags.map((tag) => {
      const el = document.createElement("div");
      el.style.cssText =
        "position:fixed;visibility:hidden;padding:6px 14px;border-radius:999px;font-size:13px;font-weight:500;white-space:nowrap;";
      el.textContent = "✦ " + tag;
      document.body.appendChild(el);
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      el.remove();
      return { w, h };
    });

    // ── Circular boundary: many thin static wall segments ──
    const segments = 48;
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const wx = CX + Math.cos(angle) * (R + 10);
      const wy = CY + Math.sin(angle) * (R + 10);
      const wall = Bodies.rectangle(wx, wy, 22, 22, {
        isStatic: true,
        angle,
        collisionFilter: { category: 0x0002, mask: 0x0001 },
      });
      World.add(world, wall);
    }

    // ── Pill physics bodies ──
    const pillBodies = tags.map((_, i) => {
      const { w, h } = pillSizes[i];
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * (R - Math.max(w, h) / 2 - 10);
      const x = CX + Math.cos(angle) * dist;
      const y = CY + Math.sin(angle) * dist;

      const body = Bodies.rectangle(x, y, w, h, {
        restitution: 0.75,
        frictionAir: 0.018,
        friction: 0.1,
        chamfer: { radius: h / 2 },
        collisionFilter: { category: 0x0001, mask: 0x0003 },
      });
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
        "padding:6px 14px;font-size:13px;font-weight:500;white-space:nowrap;" +
        "pointer-events:none;user-select:none;box-shadow:0 1px 6px rgba(0,0,0,0.15);";
      el.textContent = "✦ " + tags[i];
      arena.appendChild(el);
      return el;
    });

    // ── Invisible canvas for Mouse interaction ──
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

    // ── Sync DOM pills + enforce circular boundary ──
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

    // ── Gentle random nudges to keep things lively ──
    const nudgeInterval = setInterval(() => {
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
      clearInterval(nudgeInterval);
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
      pillEls.forEach((el) => el.remove());
    };
  }, []);

  return (
    <div className="relative w-full lg:w-[45%] p-6 flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-3xl"
        style={{
          backgroundImage: "url('/imgs/bluebg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2E2C76]/70 rounded-3xl" />

      {/* Physics arena */}
      <div
        ref={arenaRef}
        className="relative w-[380px] h-[380px] rounded-full border border-white/30"
        style={{ backdropFilter: "blur(0.4px)", overflow: "hidden" }}
      >
        {/* Invisible canvas handles mouse drag hit-testing */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "380px",
            height: "380px",
            opacity: 0,
            pointerEvents: "auto",
          }}
        />
      </div>
    </div>
  );
}

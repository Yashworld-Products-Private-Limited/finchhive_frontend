"use client";
import { useEffect, useState } from "react";
import * as Matter from "matter-js";

const tags = [
  "Customer Support",
  "Passion",
  "Positive Experience",
  "Reliability",
  "Quality",
  "Customer Support",
  "Passion",
  "Positive Experience",
  "Trustworthiness",
  "Customer Focus",
  "Long-Term Relationships",
  "Innovation",
  "Collaboration",
  "Personalization",
  "Reliability",
  "Quality",
];

export default function PhysicsPills() {
  const [bodies, setBodies] = useState<any[]>([]);

  useEffect(() => {
    const { Engine, World, Bodies, Runner, Body, Events } = Matter;

    const engine = Engine.create();
    const world = engine.world;

    engine.world.gravity.y = 0.8;

    const size = 390;
    const radius = size / 2;

    const segments = 20;
    const walls = [];

    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 3;

      const x = radius + Math.cos(angle) * radius;
      const y = radius + Math.sin(angle) * radius;

      walls.push(
        Bodies.rectangle(x, y, 30, 90, {
          isStatic: true,
          angle,
        }),
      );
    }

    World.add(world, walls);

    const pillBodies = tags.map(() =>
      Bodies.circle(Math.random() * size, Math.random() * size, 30, {
        restitution: 1,
        frictionAir: 0.4,
      }),
    );

    World.add(world, pillBodies);

    Events.on(engine, "afterUpdate", () => {
      setBodies([...pillBodies]);
    });

    setInterval(() => {
      pillBodies.forEach((body) => {
        Body.applyForce(body, body.position, {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
        });
      });
    }, 3000);

    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Runner.stop(runner);
      World.clear(world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div className="relative w-full lg:w-[45%]  p-6 flex items-center justify-center">
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
      <div className="relative w-[380px] h-[380px] rounded-full backdrop-blur-[0.4px] border border-white/30 overflow-hidden">
        {bodies.map((body, i) => (
          <div
            key={i}
            className="absolute px-4 py-2 bg-white text-[#2E2C76] rounded-full text-sm shadow-md"
            style={{
              transform: `translate(${body.position.x - 50}px, ${
                body.position.y - 20
              }px)`,
            }}
          >
            ✦ {tags[i]}
          </div>
        ))}
      </div>
    </div>
  );
}

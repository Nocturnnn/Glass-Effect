import React, { useMemo, useRef, useState } from "react";

const panes = [
  {
    id: "left",
    className: "pane-left",
    depth: -10,
    tint: "rgba(103, 107, 119, 0.1)"
  },
  {
    id: "top",
    className: "pane-top",
    depth: 7,
    tint: "rgba(181, 148, 164, 0.09)"
  },
  {
    id: "center",
    className: "pane-center",
    depth: 13,
    tint: "rgba(135, 151, 173, 0.08)"
  },
  {
    id: "right",
    className: "pane-right",
    depth: -15,
    tint: "rgba(96, 113, 105, 0.1)"
  }
];

function getActivePane(x, y) {
  if (x < 0.35 || (x < 0.54 && y < 0.43)) {
    return "left";
  }

  if (x > 0.78) {
    return "right";
  }

  if (y < 0.38) {
    return "top";
  }

  return "center";
}

function GlassStage() {
  const frameRef = useRef(null);
  const [pointer, setPointer] = useState({
    x: 0.52,
    y: 0.37,
    active: "top"
  });

  const frameStyle = useMemo(
    () => ({
      "--mx": `${pointer.x * 100}%`,
      "--my": `${pointer.y * 100}%`,
      "--tilt-x": `${(pointer.x - 0.5) * 10}deg`,
      "--tilt-y": `${(pointer.y - 0.5) * -8}deg`
    }),
    [pointer]
  );

  function handlePointerMove(event) {
    const bounds = frameRef.current.getBoundingClientRect();
    const x = Math.min(Math.max((event.clientX - bounds.left) / bounds.width, 0), 1);
    const y = Math.min(Math.max((event.clientY - bounds.top) / bounds.height, 0), 1);

    setPointer({
      x,
      y,
      active: getActivePane(x, y)
    });
  }

  function handlePointerLeave() {
    setPointer({
      x: 0.52,
      y: 0.37,
      active: "top"
    });
  }

  return (
    <section
      className="glass-stage"
      ref={frameRef}
      style={frameStyle}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label="Interactive glass plate background"
    >
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="glass-nav" aria-label="Main navigation">
        <div className="brand-mark" aria-hidden="true" />
        <a href="#platform">Platform</a>
        <a href="#studio">Studio</a>
        <a href="#moments">Moments</a>
        <a href="#pricing">Pricing</a>
        <a className="sign-in" href="#sign-in">Sign in</a>
      </nav>

      <div className="pane-field">
        <div className="cursor-light" />

        {panes.map((pane) => {
          const x = (pointer.x - 0.5) * pane.depth;
          const y = (pointer.y - 0.5) * pane.depth;

          return (
            <div
              className={`glass-pane ${pane.className} ${
                pointer.active === pane.id ? "is-active" : ""
              }`}
              key={pane.id}
              style={{
                "--pane-x": `${x}px`,
                "--pane-y": `${y}px`,
                "--pane-tint": pane.tint
              }}
            />
          );
        })}

        <svg className="pane-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M1 1 L53 1 L54 33 L35 51 L34 99 L1 99 Z" />
          <path d="M54 1 L89 1 L74 43 L54 33 Z" />
          <path d="M35 51 L54 33 L74 43 L82 99 L34 99 Z" />
          <path d="M89 1 L99 1 L99 99 L82 99 L74 43 Z" />
        </svg>

        <div className="copy-stack">
          <p className="eyebrow">GLASS / TOUCH / MOTION</p>
          <h2>Designed in glass.</h2>
          <p className="intro">
            A fluid playground of responsive panes, soft refraction, and reactive
            motion.
          </p>
          <div className="actions">
            <a href="#studio">Open studio</a>
            <a href="#paper">Read paper</a>
          </div>
        </div>

        <span className="meta meta-left">AI PANELS LAB</span>
        <span className="meta meta-right">HOLD / EXPLORE / DISCOVER</span>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="page-shell">
      <h1>
        <span>Glass Effect</span>
        {" "}
        <span>from ThreeJS</span>
      </h1>
      <div className="showcase">
        <GlassStage />
      </div>
    </main>
  );
}

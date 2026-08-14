import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

function VantaBackground({
  // original density restored - the network is now frozen (see below) instead
  // of thinned out, so it can look like the earlier version again
  maxDistance = 15,
  spacing = 16,
  points = 10,
  color = 0x47b0f0,
  // slightly darker blue for stronger contrast
  backgroundColor = 0x051025,
  // no interaction on a static background
  mouseControls = false,
  touchControls = false,
  scale = 1.0,
  scaleMobile = 1.0,
  // control renderer pixel ratio to improve perceived smoothness (lower = smoother on low-end)
  style = {},
}) {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
  const pixelRatio = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 1.5) : 1;
  
  if (!vantaRef.current) return;

  // destroy existing effect before re-creating (if props changed)
  if (effectRef.current) {
    try {
      effectRef.current.destroy();
    } catch (e) {}
    effectRef.current = null;
  }

  effectRef.current = NET({
    el: vantaRef.current,
    THREE: THREE,
    mouseControls,
    touchControls,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale,
    scaleMobile,
    color,
    backgroundColor,
    points,
    maxDistance,
    spacing,
  });

  try {
    const renderer = effectRef.current && effectRef.current.renderer;
    if (renderer && typeof renderer.setPixelRatio === "function") {
      renderer.setPixelRatio(pixelRatio);
    }
  } catch (e) {}

  // Vanta's NET effect has no "speed"/"pause" option that actually stops the
  // point drift, so freeze it manually: let it paint a couple of real frames
  // (so the canvas isn't blank), then cancel its internal rAF loop. The last
  // rendered frame stays on the canvas as a static image.
  let freezeFrame1, freezeFrame2;
  freezeFrame1 = window.requestAnimationFrame(() => {
    freezeFrame2 = window.requestAnimationFrame(() => {
      const effect = effectRef.current;
      if (effect && effect.req) {
        window.cancelAnimationFrame(effect.req);
      }
    });
  });

  return () => {
    window.cancelAnimationFrame(freezeFrame1);
    window.cancelAnimationFrame(freezeFrame2);
    if (effectRef.current) {
      try {
        effectRef.current.destroy();
      } catch (e) {}
      effectRef.current = null;
    }
  };
}, [maxDistance, spacing, points, color, backgroundColor, mouseControls, touchControls, scale, scaleMobile]);


  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, //ensures content stays on top
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}

export default VantaBackground;

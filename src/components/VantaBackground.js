import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

function VantaBackground({
  // match the script snippet defaults you posted
  maxDistance = 15,
  spacing = 16,
  points = 10,
  color = 0x47b0f0,
  // slightly darker blue for stronger contrast
  backgroundColor = 0x051025,
  mouseControls = true,
  touchControls = true,
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

  return () => {
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

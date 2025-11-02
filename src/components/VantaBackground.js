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
  pixelRatio = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 1.5) : 1,
  style = {},
}) {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    // destroy existing effect before re-creating (if props changed)
    if (effectRef.current) {
      try {
        effectRef.current.destroy();
      } catch (e) {
        // ignore
      }
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

    // Try to reduce jitter and improve smoothness by capping the renderer pixel ratio.
    // Lowering pixel ratio can improve frame rate on slower devices.
    try {
      const renderer = effectRef.current && effectRef.current.renderer;
      if (renderer && typeof renderer.setPixelRatio === "function") {
        renderer.setPixelRatio(pixelRatio);
      }
    } catch (e) {
      // ignore if renderer isn't exposed or operation fails
    }

    return () => {
      if (effectRef.current) {
        try {
          effectRef.current.destroy();
        } catch (e) {
          // ignore
        }
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

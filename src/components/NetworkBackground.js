import React, { useEffect, useRef } from "react";

// Static "network" backdrop: dots connected by lines within a distance
// threshold, drawn once to a canvas and never re-animated. Replaces the
// old Vanta.js/Three.js live-animated version, which read as busy/distracting
// and competed with body text for attention.
function NetworkBackground({
  pointCount = 90,
  maxDistance = 130,
  backgroundColor = "#051025",
  dotColor = "rgba(120, 190, 245, 0.6)",
  lineColor = "71, 176, 240",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let resizeTimeout;

    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      // scale point density to screen area so it looks consistent across sizes
      const area = width * height;
      const count = Math.max(24, Math.round(pointCount * (area / (1440 * 900))));
      const points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
      }));

      ctx.lineWidth = 1;
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            ctx.strokeStyle = `rgba(${lineColor}, ${0.16 * (1 - dist / maxDistance)})`;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = dotColor;
      points.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    draw();

    // redraw (once) after resize settles, so it stays sharp on orientation/window changes
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(draw, 200);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [pointCount, maxDistance, backgroundColor, dotColor, lineColor]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}

export default NetworkBackground;

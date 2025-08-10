'use client';

import { useEffect, useRef } from 'react';

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawAurora = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create multiple aurora layers
      for (let i = 0; i < 3; i++) {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        
        // Animated color transitions
        const hue1 = (time * 0.5 + i * 60) % 360;
        const hue2 = (time * 0.3 + i * 60 + 120) % 360;
        const hue3 = (time * 0.7 + i * 60 + 240) % 360;
        
        gradient.addColorStop(0, `hsla(${hue1}, 70%, 50%, 0.1)`);
        gradient.addColorStop(0.5, `hsla(${hue2}, 80%, 60%, 0.15)`);
        gradient.addColorStop(1, `hsla(${hue3}, 90%, 70%, 0.1)`);
        
        ctx.fillStyle = gradient;
        
        // Animated wave paths
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.3);
        
        for (let x = 0; x <= canvas.width; x += 20) {
          const y = canvas.height * 0.5 + 
                   Math.sin((x * 0.005) + (time * 0.01) + i) * 100 +
                   Math.sin((x * 0.008) + (time * 0.015) + i * 2) * 50;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      }
      
      time += 1;
      animationFrameId = requestAnimationFrame(drawAurora);
    };

    resizeCanvas();
    drawAurora();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)',
        mixBlendMode: 'normal'
      }}
    />
  );
}
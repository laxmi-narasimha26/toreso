"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const shapes: Shape[] = [];
    const shapeCount = 50;

    class Shape {
      x: number;
      y: number;
      size: number;
      rotation: number;
      rotationSpeed: number;
      vx: number;
      vy: number;
      color: string;
      type: 'circle' | 'triangle' | 'square';

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 30 + 10;
        this.rotation = 0;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.color = this.getRandomColor();
        this.type = this.getRandomType();
      }

      getRandomColor(): string {
        const colors = [
          'rgba(59, 130, 246, 0.1)',
          'rgba(168, 85, 247, 0.1)',
          'rgba(236, 72, 153, 0.1)',
          'rgba(16, 185, 129, 0.1)',
          'rgba(245, 158, 11, 0.1)',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      getRandomType(): 'circle' | 'triangle' | 'square' {
        const types: ('circle' | 'triangle' | 'square')[] = ['circle', 'triangle', 'square'];
        return types[Math.floor(Math.random() * types.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color.replace('0.1', '0.3');
        ctx.lineWidth = 1;

        switch (this.type) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            break;
          
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -this.size / 2);
            ctx.lineTo(-this.size / 2, this.size / 2);
            ctx.lineTo(this.size / 2, this.size / 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            break;
          
          case 'square':
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size);
            break;
        }
        
        ctx.restore();
      }
    }

    // Create shapes
    for (let i = 0; i < shapeCount; i++) {
      shapes.push(new Shape());
    }

    // Animation loop
    function animate() {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      shapes.forEach(shape => {
        shape.update();
        shape.draw();
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ 
          background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)' 
        }}
      />
      
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-900/10 to-transparent" />
      
      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-32 h-32 rounded-full blur-3xl ${
            i % 2 === 0 ? 'bg-blue-500/10' : 'bg-purple-500/10'
          }`}
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}


import React, { useEffect, useRef } from 'react';

const StarBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        // Static stars
        let stars: { x: number; y: number; radius: number; alpha: number; speed: number }[] = [];
        // Shooting stars
        let shootingStars: { x: number; y: number; length: number; speed: number; angle: number; opacity: number }[] = [];

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;

            ctx.scale(dpr, dpr);
            initStars();
        };

        const initStars = () => {
            stars = [];
            const numStars = Math.floor((window.innerWidth * window.innerHeight) / 4000);

            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    radius: Math.random() * 1.2 + 0.5,
                    alpha: Math.random() * 0.5 + 0.3,
                    speed: Math.random() * 0.05 + 0.01,
                });
            }
        };

        const createShootingStar = () => {
            // Start from a random position, generally top-left or top-right areas
            const startX = Math.random() * window.innerWidth;
            const startY = Math.random() * (window.innerHeight / 3); // Upper third

            shootingStars.push({
                x: startX,
                y: startY,
                length: Math.random() * 80 + 10,
                speed: Math.random() * 10 + 6,
                angle: Math.PI / 4, // 45 degrees diagonal
                opacity: 1
            });
        };

        const drawStars = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

            // 1. Draw Static Stars
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

                // Twinkle
                if (Math.random() > 0.99) {
                    star.alpha = Math.random() * 0.5 + 0.5;
                } else {
                    star.alpha -= 0.01;
                    if (star.alpha < 0.2) star.alpha = 0.2;
                }

                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();
            });

            // 2. Manage Shooting Stars
            // ~0.5% chance per frame to spawn a shooting star
            if (Math.random() < 0.005) {
                createShootingStar();
            }

            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const s = shootingStars[i];

                // Move
                s.x += s.speed * Math.cos(s.angle);
                s.y += s.speed * Math.sin(s.angle);

                // Fade out
                s.opacity -= 0.01;

                // Draw trail
                const endX = s.x - s.length * Math.cos(s.angle);
                const endY = s.y - s.length * Math.sin(s.angle);

                const gradient = ctx.createLinearGradient(s.x, s.y, endX, endY);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${s.opacity})`);
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                ctx.beginPath();
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.lineCap = 'round';
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(endX, endY);
                ctx.stroke();

                // Remove if invisible or off-screen
                if (s.opacity <= 0 || s.x > window.innerWidth + 100 || s.y > window.innerHeight + 100) {
                    shootingStars.splice(i, 1);
                }
            }

            animationFrameId = requestAnimationFrame(drawStars);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        drawStars();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[-5]" />;
};

export default StarBackground;

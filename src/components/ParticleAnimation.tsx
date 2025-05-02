import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  originalSize: number;
}

const ParticleAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>(0);
  const mouseActiveRef = useRef<boolean>(false);
  const lastMouseMoveRef = useRef<number>(0);
  const gyroscopeRef = useRef<{ beta: number; gamma: number } | null>(null);
  const hasGyroscopeRef = useRef<boolean>(false);

  // Colors from MBA brand
  const colors = ['#4DCFD9', '#D24C8E', '#FFB347', '#FFFFFF'];
  const colorWeights = [4, 3, 1, 2]; // Higher weight = more frequent

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const handleResize = () => {
      if (canvas) {
        // Set canvas dimensions to match the window size
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;

        // Scale the context to ensure correct drawing operations
        ctx.scale(dpr, dpr);

        // Set the CSS size of the canvas
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        initParticles();
      }
    };

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
      mouseActiveRef.current = true;
      lastMouseMoveRef.current = Date.now();

      // After 2 seconds of inactivity, consider mouse inactive
      setTimeout(() => {
        if (Date.now() - lastMouseMoveRef.current > 2000) {
          mouseActiveRef.current = false;
        }
      }, 2000);
    };

    // Track touch position for mobile devices
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
        mouseActiveRef.current = true;
        lastMouseMoveRef.current = Date.now();

        // After 2 seconds of inactivity, consider touch inactive
        setTimeout(() => {
          if (Date.now() - lastMouseMoveRef.current > 2000) {
            mouseActiveRef.current = false;
          }
        }, 2000);
      }
    };

    // Handle device orientation changes (gyroscope)
    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      // Check if we have valid gyroscope data
      if (e.beta !== null && e.gamma !== null) {
        hasGyroscopeRef.current = true;

        // Apply some smoothing to the gyroscope data
        if (gyroscopeRef.current === null) {
          gyroscopeRef.current = {
            beta: e.beta, // Front/back tilt (-180 to 180)
            gamma: e.gamma // Left/right tilt (-90 to 90)
          };
        } else {
          // Smooth transition between readings (80% old value, 20% new value)
          gyroscopeRef.current = {
            beta: gyroscopeRef.current.beta * 0.8 + e.beta * 0.2,
            gamma: gyroscopeRef.current.gamma * 0.8 + e.gamma * 0.2
          };
        }

        // Activate mouse interaction when device is tilted significantly
        if (Math.abs(e.gamma) > 10 || Math.abs(e.beta) > 10) {
          mouseActiveRef.current = true;
          lastMouseMoveRef.current = Date.now();
        }
      }
    };

    // Check if device orientation is available and request permission if needed
    const initGyroscope = () => {
      if ('DeviceOrientationEvent' in window) {
        // For iOS 13+ devices that require permission
        if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
          // Create a button to request permission
          const requestPermission = () => {
            (DeviceOrientationEvent as any).requestPermission()
              .then((response: string) => {
                if (response === 'granted') {
                  window.addEventListener('deviceorientation', handleDeviceOrientation);
                }
              })
              .catch(console.error);
          };

          // We'll add a touch event to trigger permission request
          window.addEventListener('touchend', function permissionRequest() {
            requestPermission();
            window.removeEventListener('touchend', permissionRequest);
          }, { once: true });
        } else {
          // For non-iOS devices or older iOS that don't require permission
          window.addEventListener('deviceorientation', handleDeviceOrientation);
        }
      }
    };

    // Get weighted random color
    const getRandomColor = () => {
      const totalWeight = colorWeights.reduce((acc, weight) => acc + weight, 0);
      let random = Math.random() * totalWeight;

      for (let i = 0; i < colors.length; i++) {
        random -= colorWeights[i];
        if (random <= 0) {
          return colors[i];
        }
      }

      return colors[0]; // Fallback
    };

    // Initialize particles
    const initParticles = () => {
      // Adjust particle count based on screen size and device
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile
        ? Math.min(Math.floor(window.innerWidth * 0.03), 40) // Fewer particles on mobile
        : Math.min(Math.floor(window.innerWidth * 0.04), 80); // More particles on desktop

      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 0.5;
        particlesRef.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: size,
          originalSize: size,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: getRandomColor(),
          alpha: Math.random() * 0.5 + 0.2
        });
      }
    };

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Add a small random movement to keep particles moving even without interaction
        // Use time-based movement for a more natural flow
        const time = Date.now() * 0.001; // Convert to seconds
        const noiseOffsetX = Math.sin(time * 0.3 + index * 0.5) * 0.01;
        const noiseOffsetY = Math.cos(time * 0.2 + index * 0.7) * 0.01;

        // Apply gyroscope influence if available
        let gyroOffsetX = 0;
        let gyroOffsetY = 0;
        let gyroForceX = 0;
        let gyroForceY = 0;

        if (hasGyroscopeRef.current && gyroscopeRef.current) {
          // Convert gyroscope data to movement
          // gamma: left/right tilt (-90 to 90)
          // beta: front/back tilt (-180 to 180)

          // Direct movement based on tilt
          gyroOffsetX = (gyroscopeRef.current.gamma / 45) * 0.05; // Normalize and scale
          gyroOffsetY = (gyroscopeRef.current.beta / 45) * 0.05;  // Normalize and scale

          // Also add a force effect that pushes particles based on tilt direction
          gyroForceX = (gyroscopeRef.current.gamma / 90) * 0.01;
          gyroForceY = (gyroscopeRef.current.beta / 90) * 0.01;

          // Apply force to particle speed
          particle.speedX += gyroForceX;
          particle.speedY += gyroForceY;

          // If device is significantly tilted, make particles move more dramatically
          if (Math.abs(gyroscopeRef.current.gamma) > 20 || Math.abs(gyroscopeRef.current.beta) > 20) {
            particle.speedX += gyroForceX * 2;
            particle.speedY += gyroForceY * 2;
          }
        }

        // Update position with speed, noise, and gyroscope data
        particle.x += particle.speedX + noiseOffsetX + gyroOffsetX;
        particle.y += particle.speedY + noiseOffsetY + gyroOffsetY;

        // Wrap around edges instead of bouncing
        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = window.innerHeight;
        if (particle.y > window.innerHeight) particle.y = 0;

        // Mouse interaction - particles move away from cursor
        if (mouseActiveRef.current) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const maxDistance = 150;
          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;

            // Particles move away from cursor
            particle.speedX -= dx * force * 0.015;
            particle.speedY -= dy * force * 0.015;

            // Particles grow slightly when near cursor
            particle.size = particle.originalSize * (1 + force * 0.5);
          } else {
            // Return to original size
            particle.size = particle.originalSize;
          }
        } else {
          // Return to original size when mouse is inactive
          particle.size = particle.originalSize;

          // Add a very small random movement to prevent particles from stopping completely
          if (Math.abs(particle.speedX) < 0.05 && Math.abs(particle.speedY) < 0.05) {
            particle.speedX += (Math.random() - 0.5) * 0.02;
            particle.speedY += (Math.random() - 0.5) * 0.02;
          }
        }

        // Speed limit and damping
        const maxSpeed = 1.2;
        const minSpeed = 0.05; // Ensure particles always have some minimum movement
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);

        if (speed > maxSpeed) {
          particle.speedX = (particle.speedX / speed) * maxSpeed;
          particle.speedY = (particle.speedY / speed) * maxSpeed;
        } else if (speed < minSpeed && !mouseActiveRef.current) {
          // If speed is too low and mouse is not active, add a small random boost
          const angle = Math.random() * Math.PI * 2;
          particle.speedX += Math.cos(angle) * 0.03;
          particle.speedY += Math.sin(angle) * 0.03;
        }

        // Apply slight damping to slow particles over time, but not too much
        particle.speedX *= 0.995; // Less damping to maintain movement
        particle.speedY *= 0.995;

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();

        // Add subtle glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, particle.color.replace(')', ', 0.3)').replace('rgb', 'rgba'));
        gradient.addColorStop(1, particle.color.replace(')', ', 0)').replace('rgb', 'rgba'));

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.2;
        ctx.fill();

        ctx.globalAlpha = 1;

        // Connect particles that are close to each other
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Adjust connection distance based on device
            const isMobile = window.innerWidth < 768;
            const maxConnectDistance = isMobile ? 80 : 120;

            if (distance < maxConnectDistance) {
              // Calculate opacity based on distance
              const opacity = 0.15 * (1 - distance / maxConnectDistance);

              // Draw connection line with gradient
              const gradient = ctx.createLinearGradient(
                particle.x, particle.y, otherParticle.x, otherParticle.y
              );
              gradient.addColorStop(0, particle.color.replace(')', `, ${opacity})`).replace('rgb', 'rgba'));
              gradient.addColorStop(1, otherParticle.color.replace(')', `, ${opacity})`).replace('rgb', 'rgba'));

              ctx.beginPath();
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Initialize gyroscope for mobile devices
    initGyroscope();

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default ParticleAnimation;

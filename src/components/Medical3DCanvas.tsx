import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  color: string;
  type: 'node' | 'cross' | 'ring' | 'hex';
  rotX: number;
  rotY: number;
  rotZ: number;
  rotSpeedX: number;
  rotSpeedY: number;
  rotSpeedZ: number;
}

interface ActionPulse {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
  color: string;
}

export const Medical3DCanvas: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  density?: number;
}> = ({ className, style, density = 50 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth);
    let height = (canvas.height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight);

    // High DPI crispness
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Camera state with smooth inertia
    const camera = {
      x: 0,
      y: 0,
      z: 0,
      targetX: 0,
      targetY: 0,
      targetZ: 0,
      rotX: 0,
      targetRotX: 0,
      rotY: 0,
      targetRotY: 0,
    };

    // Mouse coordinates in canvas space
    const mouse = {
      x: -9999,
      y: -9999,
      worldX: 0,
      worldY: 0,
      active: false,
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;

      const normX = (e.clientX / width) * 2 - 1;
      const normY = (e.clientY / height) * 2 - 1;
      camera.targetX = normX * 50;
      camera.targetY = normY * 38;
      camera.targetRotY = normX * 0.1;
      camera.targetRotX = -normY * 0.08;
    };

    const onMouseLeave = () => {
      mouse.active = false;
      camera.targetX = 0;
      camera.targetY = 0;
      camera.targetRotY = 0;
      camera.targetRotX = 0;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave, { passive: true });

    // Scroll listener for 3D depth shift
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      camera.targetZ = (scrollY * 0.35) % 700;
      camera.targetRotX = Math.min(scrollY * 0.0003, 0.2);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Create 3D medical particles
    const particles: Particle[] = [];
    const palette = [
      'rgba(13, 155, 92, ', // brand emerald
      'rgba(16, 185, 109, ', // vibrant mint
      'rgba(52, 211, 153, ', // pastel mint
      'rgba(14, 165, 233, ', // medical tech cyan
    ];

    const boundX = width > 1000 ? 750 : width > 600 ? 420 : 200;
    const boundY = height > 700 ? 550 : 380;
    const boundZ = 850;

    for (let i = 0; i < density; i++) {
      const rand = Math.random();
      const type: 'node' | 'cross' | 'ring' | 'hex' =
        rand > 0.88 ? 'cross' : rand > 0.76 ? 'hex' : rand > 0.62 ? 'ring' : 'node';

      particles.push({
        x: (Math.random() - 0.5) * boundX * 2,
        y: (Math.random() - 0.5) * boundY * 2,
        z: Math.random() * boundZ - 200,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        vz: (Math.random() - 0.5) * 0.18,
        size:
          type === 'cross'
            ? 12 + Math.random() * 8
            : type === 'hex'
            ? 14 + Math.random() * 10
            : type === 'ring'
            ? 16 + Math.random() * 12
            : 3 + Math.random() * 4,
        alpha: 0.18 + Math.random() * 0.38,
        baseAlpha: 0.18 + Math.random() * 0.38,
        color: palette[Math.floor(Math.random() * palette.length)],
        type,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        rotSpeedX: (Math.random() - 0.5) * 0.012,
        rotSpeedY: (Math.random() - 0.5) * 0.015,
        rotSpeedZ: (Math.random() - 0.5) * 0.01,
      });
    }

    // Synaptic Action Potential Pulses
    const pulses: ActionPulse[] = [];
    const maxPulses = 12;

    const spawnPulse = (fromIdx: number, toIdx: number) => {
      if (pulses.length >= maxPulses) return;
      pulses.push({
        fromIndex: fromIdx,
        toIndex: toIdx,
        progress: 0,
        speed: 0.02 + Math.random() * 0.025,
        color: Math.random() > 0.4 ? '#10b96d' : '#38bdf8',
      });
    };

    const fov = 520;
    let frame = 0;

    // Render loop
    const render = () => {
      frame++;

      // Smooth camera interpolation
      camera.x += (camera.targetX - camera.x) * 0.06;
      camera.y += (camera.targetY - camera.y) * 0.06;
      camera.z += (camera.targetZ - camera.z) * 0.07;
      camera.rotX += (camera.targetRotX - camera.rotX) * 0.06;
      camera.rotY += (camera.targetRotY - camera.rotY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw subtle background telemetry ECG wave
      drawECGTelemetry(ctx, width, height, frame);

      // Project all 3D particles
      const projected: {
        p: Particle;
        index: number;
        px: number;
        py: number;
        scale: number;
        dist: number;
        visible: boolean;
      }[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Motion & drift
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        p.rotX += p.rotSpeedX;
        p.rotY += p.rotSpeedY;
        p.rotZ += p.rotSpeedZ;

        // Wrap around 3D boundaries
        if (p.x < -boundX) p.x = boundX;
        if (p.x > boundX) p.x = -boundX;
        if (p.y < -boundY) p.y = boundY;
        if (p.y > boundY) p.y = -boundY;
        if (p.z < -200) p.z = boundZ - 200;
        if (p.z > boundZ - 200) p.z = -200;

        // Interactive mouse repulsive wave
        if (mouse.active) {
          const mProjX = mouse.x - cx;
          const mProjY = mouse.y - cy;
          const mDist = Math.hypot(p.x - mProjX, p.y - mProjY);
          if (mDist < 180) {
            const force = (1 - mDist / 180) * 2.2;
            const angle = Math.atan2(p.y - mProjY, p.x - mProjX);
            p.x += Math.cos(angle) * force;
            p.y += Math.sin(angle) * force;
          }
        }

        // Relative coordinates to camera
        const rx = p.x - camera.x;
        const ry = p.y - camera.y;
        let rz = p.z - camera.z;

        // Infinite loop wrap for Z
        while (rz < 60) rz += boundZ;
        while (rz > boundZ + 60) rz -= boundZ;

        // 3D rotation transform
        const cosY = Math.cos(camera.rotY);
        const sinY = Math.sin(camera.rotY);
        const cosX = Math.cos(camera.rotX);
        const sinX = Math.sin(camera.rotX);

        // Rotate Y
        const x1 = rx * cosY - rz * sinY;
        const z1 = rz * cosY + rx * sinY;

        // Rotate X
        const y2 = ry * cosX - z1 * sinX;
        const z2 = z1 * cosX + ry * sinX;

        if (z2 <= 25) {
          projected.push({ p, index: i, px: 0, py: 0, scale: 0, dist: z2, visible: false });
          continue;
        }

        const scale = fov / (fov + z2);
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;

        projected.push({ p, index: i, px, py, scale, dist: z2, visible: true });
      }

      // Connection lines & Synaptic network
      const maxConnectDist = 150;
      const activeConnections: { p1: (typeof projected)[0]; p2: (typeof projected)[0] }[] = [];

      for (let i = 0; i < projected.length; i++) {
        const item1 = projected[i];
        if (!item1.visible) continue;

        for (let j = i + 1; j < projected.length; j++) {
          const item2 = projected[j];
          if (!item2.visible) continue;

          const dx = item1.p.x - item2.p.x;
          const dy = item1.p.y - item2.p.y;
          const dz = item1.p.z - item2.p.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < maxConnectDist) {
            const lineAlpha = (1 - dist3D / maxConnectDist) * 0.16 * Math.min(item1.scale, 1);
            ctx.strokeStyle = `rgba(13, 155, 92, ${lineAlpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(item1.px, item1.py);
            ctx.lineTo(item2.px, item2.py);
            ctx.stroke();

            activeConnections.push({ p1: item1, p2: item2 });

            // Randomly trigger action potential pulses along active connections
            if (frame % 40 === 0 && Math.random() < 0.08) {
              spawnPulse(item1.index, item2.index);
            }
          }
        }
      }

      // Render Action Potential Pulses (traveling light packets)
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        pulse.progress += pulse.speed;

        const p1Item = projected.find((item) => item.index === pulse.fromIndex);
        const p2Item = projected.find((item) => item.index === pulse.toIndex);

        if (p1Item?.visible && p2Item?.visible && pulse.progress <= 1) {
          const curX = p1Item.px + (p2Item.px - p1Item.px) * pulse.progress;
          const curY = p1Item.py + (p2Item.py - p1Item.py) * pulse.progress;
          const curScale = (p1Item.scale + p2Item.scale) / 2;

          // Glowing pulse head
          const pulseGlow = ctx.createRadialGradient(curX, curY, 0, curX, curY, 6 * curScale);
          pulseGlow.addColorStop(0, pulse.color);
          pulseGlow.addColorStop(0.4, 'rgba(16, 185, 109, 0.7)');
          pulseGlow.addColorStop(1, 'rgba(16, 185, 109, 0)');

          ctx.fillStyle = pulseGlow;
          ctx.beginPath();
          ctx.arc(curX, curY, 6 * curScale, 0, Math.PI * 2);
          ctx.fill();

          // Bright center
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(curX, curY, 1.8 * curScale, 0, Math.PI * 2);
          ctx.fill();
        } else if (pulse.progress > 1) {
          pulses.splice(i, 1);
        }
      }

      // Sort particles by depth for painter's algorithm
      projected.sort((a, b) => b.dist - a.dist);

      // Render 3D geometric particles
      for (let i = 0; i < projected.length; i++) {
        const item = projected[i];
        if (!item.visible) continue;

        const { p, px, py, scale } = item;
        const alpha = Math.min(Math.max(p.baseAlpha * scale * 1.3, 0.05), 0.7);

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(p.rotZ);

        if (p.type === 'cross') {
          // 3D Medical Cross with depth bevel
          const s = p.size * scale;
          const w = s * 0.32;
          ctx.fillStyle = `${p.color}${alpha.toFixed(3)})`;

          ctx.beginPath();
          ctx.roundRect(-s / 2, -w / 2, s, w, 2);
          ctx.fill();

          ctx.beginPath();
          ctx.roundRect(-w / 2, -s / 2, w, s, 2);
          ctx.fill();

          // Center specular shine
          ctx.fillStyle = `rgba(255, 255, 255, ${(alpha * 0.8).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(0, 0, 1.5 * scale, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'hex') {
          // 3D Hexagonal Benzene / Molecular Lattice
          const r = p.size * scale * 0.7;
          ctx.strokeStyle = `${p.color}${(alpha * 0.8).toFixed(3)})`;
          ctx.lineWidth = 1.3 * scale;
          ctx.beginPath();
          for (let h = 0; h < 6; h++) {
            const angle = (h * Math.PI) / 3;
            const hx = r * Math.cos(angle);
            const hy = r * Math.sin(angle);
            if (h === 0) ctx.moveTo(hx, hy);
            else ctx.lineTo(hx, hy);
          }
          ctx.closePath();
          ctx.stroke();

          // Hex inner atom
          ctx.fillStyle = `${p.color}${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(0, 0, 1.8 * scale, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'ring') {
          // Dual concentric telemetry ring
          const r = p.size * scale * 0.8;
          ctx.strokeStyle = `${p.color}${(alpha * 0.65).toFixed(3)})`;
          ctx.lineWidth = 1.2 * scale;
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.stroke();

          // Inner ring
          ctx.strokeStyle = `${p.color}${(alpha * 0.35).toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(0, 0, r * 0.55, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          // Bioluminescent Node with radial glow
          const r = p.size * scale;
          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
          grad.addColorStop(0, `${p.color}${(alpha * 1.3).toFixed(3)})`);
          grad.addColorStop(0.5, `${p.color}${alpha.toFixed(3)})`);
          grad.addColorStop(1, `${p.color}0)`);

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        ...style,
      }}
    />
  );
};

// Subtle telemetry ECG wave across the canvas background
function drawECGTelemetry(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  frame: number
) {
  const yBase = h * 0.68;
  const speed = 1.4;
  const offset = (frame * speed) % 240;

  ctx.save();
  ctx.strokeStyle = 'rgba(13, 155, 92, 0.05)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();

  for (let x = 0; x <= w; x += 6) {
    const cycle = (x + offset) % 240;
    let dy = 0;

    // Standard P-Q-R-S-T Cardiac pulse wave formula
    if (cycle > 40 && cycle < 60) {
      // P wave
      dy = Math.sin(((cycle - 40) / 20) * Math.PI) * -6;
    } else if (cycle >= 75 && cycle <= 80) {
      // Q dip
      dy = 4;
    } else if (cycle > 80 && cycle <= 95) {
      // R spike
      dy = -26;
    } else if (cycle > 95 && cycle <= 105) {
      // S dip
      dy = 8;
    } else if (cycle > 125 && cycle < 155) {
      // T wave
      dy = Math.sin(((cycle - 125) / 30) * Math.PI) * -9;
    }

    if (x === 0) ctx.moveTo(x, yBase + dy);
    else ctx.lineTo(x, yBase + dy);
  }

  ctx.stroke();
  ctx.restore();
}

export default Medical3DCanvas;

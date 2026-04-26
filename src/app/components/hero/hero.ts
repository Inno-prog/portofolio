import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit, OnDestroy {
  private animId = 0;
  private parallaxRaf = 0;
  private mouseX = 0;
  private mouseY = 0;
  private scrollY = 0;
  private bgEl: HTMLElement | null = null;

  ngAfterViewInit() {
  const wrapper = document.querySelector('[data-hero-bg]') as HTMLElement | null;
  // Use the wrapper element (background-image) for transforms so the image keeps its 'contain' sizing
  this.bgEl = wrapper;
    if (wrapper) wrapper.classList.add('idle');
    if (this.bgEl) {
      // Listen to mouse and scroll
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('scroll', this.onScroll, { passive: true });
      this.parallaxLoop();
    }

    const canvas = document.getElementById('starsCanvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    type Star = { x: number; y: number; r: number; speed: number; opacity: number; phase: number; tail: number; color: string };

    const colors = ['#ffffff', '#87ceeb', '#ffd700']; // white, sky blue, gold

    const stars: Star[] = Array.from({ length: 250 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.8 + 0.2, // radius from 0.2 to 3.0
      speed: Math.random() * 1.5 + 0.5, // speed from 0.5 to 2.0
      opacity: Math.random() * 0.8 + 0.2,
      phase: Math.random() * Math.PI * 2,
      tail: Math.random() * 10 + 5, // trail length from 5 to 15
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of stars) {
        s.y += s.speed;
        s.phase += 0.025; // twinkle frequency
        if (s.y - s.tail > canvas.height) {
          s.y = -s.tail;
          s.x = Math.random() * canvas.width;
        }

        const alpha = s.opacity * (0.5 + 0.5 * Math.sin(s.phase));

        // Convert hex color to rgba with alpha
        const hex = s.color;
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        // Traînée lumineuse
        const grad = ctx.createLinearGradient(s.x, s.y - s.tail, s.x, s.y);
        grad.addColorStop(0, `rgba(${r},${g},${b},0)`);
        grad.addColorStop(1, `rgba(${r},${g},${b},${alpha})`);
        ctx.beginPath();
        ctx.moveTo(s.x, s.y - s.tail);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.r * 0.8;
        ctx.stroke();

        // Point lumineux
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.fill();
      }

      this.animId = requestAnimationFrame(animate);
    };
    animate();
  }

  private onMouseMove = (e: MouseEvent) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    // Normalize to -1..1
    this.mouseX = (e.clientX / w - 0.5) * 2;
    this.mouseY = (e.clientY / h - 0.5) * 2;
  }

  private onScroll = () => {
    this.scrollY = window.scrollY || window.pageYOffset || 0;
  }

  private parallaxLoop = () => {
    if (!this.bgEl) return;
    // Parallax factors (tweak for subtlety)
  const translateX = this.mouseX * 3; // px (much more subtle)
  const translateY = this.mouseY * 3 + Math.min(this.scrollY / 120, 10); // px (much more subtle)
  // Do NOT scale the image — only translate to preserve full-image visibility
  // (remove scale to avoid cropping)
  // Apply transform: translate-only for a cover image (no extra centering translate)
  this.bgEl.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;

    this.parallaxRaf = requestAnimationFrame(this.parallaxLoop);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animId);
    cancelAnimationFrame(this.parallaxRaf);
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('scroll', this.onScroll);
  }
}

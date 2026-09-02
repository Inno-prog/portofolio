import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { Router } from '@angular/router';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements AfterViewInit, OnDestroy {
  private animId = 0;
  services = ['Codage', 'Installation', 'Activation', 'Maintenance'];
  visibleCount = 0;
  highlightedIndex = -1;
  circleRotation = 0;
  private highlightTimer?: number;
  private loopTimer?: number;
  private spinTimer?: number;

  constructor(private router: Router, public i18n: I18nService) {}

  goTo(route: string) {
    this.router.navigate([route]);
  }

  ngAfterViewInit() {
    this.startServiceAnimation();
    this.startSpin();

    const canvas = document.getElementById('starsCanvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.2,
      speed: Math.random() * 0.8 + 0.2,
      opacity: Math.random() * 0.7 + 0.3,
      phase: Math.random() * Math.PI * 2,
      tail: Math.random() * 8 + 3,
    }));

    const animate = () => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      for (const s of stars) {
        s.y += s.speed;
        s.phase += 0.025;
        if (s.y - s.tail > canvas.height) { s.y = -s.tail; s.x = Math.random() * canvas.width; }
        const alpha = s.opacity * (0.5 + 0.5 * Math.sin(s.phase));
        const grad = ctx.createLinearGradient(s.x, s.y - s.tail, s.x, s.y);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(1, `rgba(255,255,255,${alpha})`);
        ctx.beginPath(); ctx.moveTo(s.x, s.y - s.tail); ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = grad; ctx.lineWidth = s.r * 0.8; ctx.stroke();
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`; ctx.fill();
      }
      this.animId = requestAnimationFrame(animate);
    };
    animate();
  }

  private startSpin() {
    const step = () => {
      this.circleRotation = (this.circleRotation + 0.15) % 360;
      this.spinTimer = window.setTimeout(step, 16);
    };
    step();
  }

  private startServiceAnimation() {
    const services = this.services;

    services.forEach((_, index) => {
      this.highlightTimer = window.setTimeout(() => {
        this.visibleCount = index + 1;
      }, 600 + index * 400);
    });

    const initialRevealDuration = 600 + services.length * 400 + 500;
    this.loopTimer = window.setTimeout(() => {
      this.startHighlightLoop();
    }, initialRevealDuration);
  }

  private startHighlightLoop() {
    let currentHighlight = 0;

    const runLoop = () => {
      this.highlightedIndex = currentHighlight;

      this.loopTimer = window.setTimeout(() => {
        currentHighlight = (currentHighlight + 1) % this.services.length;
        runLoop();
      }, 1500);
    };

    runLoop();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animId);
    if (this.highlightTimer) clearTimeout(this.highlightTimer);
    if (this.loopTimer) clearTimeout(this.loopTimer);
    if (this.spinTimer) clearTimeout(this.spinTimer);
  }
}

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

  constructor(private router: Router, public i18n: I18nService) {}

  goTo(route: string) {
    this.router.navigate([route]);
  }

  ngAfterViewInit() {
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

    // persistent trails: fade previous frame slightly instead of clearing
    const animate = () => {
      // fade previous frame to create continuous trails
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

  ngOnDestroy() { cancelAnimationFrame(this.animId); }
}

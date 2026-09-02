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
  private waveAnimId = 0;
  private typingTimer?: number;
  private resizeHandlers: (() => void)[] = [];

  constructor(private router: Router, public i18n: I18nService) {}

  goTo(route: string) {
    this.router.navigate([route]);
  }

  ngAfterViewInit() {
    this.initWaveCanvas();
    this.initTypingEffect();
  }

  private initWaveCanvas() {
    const canvas = document.getElementById('waveCanvas') as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    this.resizeHandlers.push(resize);

    let t = 0;

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const totalWaves = 5;
      const baseAlpha = 0.045;

      for (let i = 0; i < totalWaves; i++) {
        const yBase = canvas.height * (0.3 + i * 0.14);
        const amp = 18 + i * 6;
        const freq = 0.008 - i * 0.001;
        const speed = 0.6 + i * 0.3;
        const alpha = baseAlpha + i * 0.018;

        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x += 3) {
          const y = yBase
            + Math.sin(x * freq + t * speed) * amp
            + Math.sin(x * freq * 1.7 + t * speed * 0.8 + i) * (amp * 0.5);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, yBase - amp, 0, canvas.height);
        grad.addColorStop(0, `rgba(0, 220, 255, ${alpha})`);
        grad.addColorStop(0.5, `rgba(0, 180, 200, ${alpha * 0.7})`);
        grad.addColorStop(1, `rgba(0, 100, 160, ${alpha * 0.4})`);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      t += 0.012;
      this.waveAnimId = requestAnimationFrame(drawWaves);
    };
    drawWaves();
  }

  private initTypingEffect() {
    const phrases = [
      'développeur web & mobile',
      "créateur d'expériences UI",
      'passionné de code propre',
      'disponible pour vos projets'
    ];
    let pi = 0, ci = 0, deleting = false;
    const el = document.getElementById('typingWord');

    const type = () => {
      if (!el) return;
      const word = phrases[pi];
      if (!deleting) {
        el.textContent = word.slice(0, ++ci);
        if (ci === word.length) { deleting = true; this.typingTimer = window.setTimeout(type, 1800); return; }
      } else {
        el.textContent = word.slice(0, --ci);
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
      }
      this.typingTimer = window.setTimeout(type, deleting ? 45 : 90);
    };
    this.typingTimer = window.setTimeout(type, 1500);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.waveAnimId);
    if (this.typingTimer) clearTimeout(this.typingTimer);
    for (const h of this.resizeHandlers) window.removeEventListener('resize', h);
    this.resizeHandlers = [];
  }
}

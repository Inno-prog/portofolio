import { Directive, ElementRef, Input, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[animateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input('animateOnScroll') animationClass = 'anim-show';
  @Input() threshold = 0.15;
  private observer?: IntersectionObserver;
  private initialized = false;

  constructor(private el: ElementRef, private rnd: Renderer2) {}

  ngAfterViewInit() {
    try {
      const element = this.el.nativeElement as HTMLElement | null;
      if (!element) return;

      const show = () => {
        if (this.initialized) return;
        this.initialized = true;
        try {
          this.rnd.addClass(element, this.animationClass);
          if (element.classList.contains('stagger')) {
            this.rnd.addClass(element, 'animate');
          }
        } catch (e) {
          console.warn('[AnimateOnScroll] addClass failed', e);
        }
      };

      this.observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            break;
          }
        }
      }, { threshold: this.threshold });

      this.observer.observe(element);

      if (typeof window !== 'undefined' && element.getBoundingClientRect) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          show();
          this.observer?.disconnect();
        }
      }
    } catch (e) {
      console.warn('[AnimateOnScroll] init failed', e);
    }
  }

  ngOnDestroy() {
    try { this.observer?.disconnect(); } catch (e) {}
  }
}

import { Directive, ElementRef, Input, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[animateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input('animateOnScroll') animationClass = 'anim-show';
  @Input() threshold = 0.15;
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private rnd: Renderer2) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.rnd.addClass(this.el.nativeElement, this.animationClass);
          // if element has .stagger then add animate class to trigger children delays
          if (this.el.nativeElement.classList.contains('stagger')) {
            this.rnd.addClass(this.el.nativeElement, 'animate');
          }
        }
      }
    }, { threshold: this.threshold });
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() { this.observer?.disconnect(); }
}

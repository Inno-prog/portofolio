import { Component, ElementRef, Input, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lottie-player',
  standalone: true,
  template: `<div class="lottie-root" #root></div>`,
  styles: [`.lottie-root{width:100%;height:100%;pointer-events:none}`]
})
export class LottiePlayer implements AfterViewInit, OnDestroy {
  @Input() path = '';
  @Input() autoplay = true;
  @Input() loop = true;
  private anim: any = null;

  constructor(private host: ElementRef<HTMLElement>) {}

   async ngAfterViewInit() {
     if (!this.path) return;
     // lazy import to avoid bundling if not used
     const lottie = await import('lottie-web');
     // @ts-ignore: lottie-web typings may be missing loadAnimation property
     this.anim = lottie.loadAnimation({
       container: this.host.nativeElement.querySelector('.lottie-root'),
       renderer: 'svg',
       loop: this.loop,
       autoplay: this.autoplay,
       path: this.path
     });
   }

  ngOnDestroy() {
    if (this.anim) { this.anim.destroy(); this.anim = null; }
  }
}

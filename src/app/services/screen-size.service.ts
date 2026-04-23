import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScreenSizeService {
  isMobile = signal(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        this.isMobile.set(window.innerWidth < 1024);
      });
    }
  }
}

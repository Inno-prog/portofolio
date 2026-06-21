import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  current: 'dark' | 'light' = 'dark';

  toggle() {
    this.current = this.current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.current);
  }

  set(theme: 'dark' | 'light') {
    this.current = theme;
    document.documentElement.setAttribute('data-theme', this.current);
  }
}

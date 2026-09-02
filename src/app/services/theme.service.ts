import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  current: 'dark' | 'light' = 'light';

  constructor() {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
    if (saved === 'dark' || saved === 'light') {
      this.current = saved;
    }
    this.set(this.current);
  }

  toggle() {
    this.current = this.current === 'dark' ? 'light' : 'dark';
    this.set(this.current);
  }

  set(theme: 'dark' | 'light') {
    this.current = theme;
    document.documentElement.setAttribute('data-theme', this.current);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', this.current);
    }
  }
}

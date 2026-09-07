import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  constructor(private theme: ThemeService) {}

  ngAfterViewInit() {
    try {
      const root = document.querySelector('app-root');
      if (root) {
        root.classList.add('loaded');
      }
    } catch (e) {
      console.warn('[App] failed to add loaded class', e);
    }

    if (typeof window !== 'undefined' && window.history) {
      try {
        window.history.scrollRestoration = 'manual';
        window.scrollTo({ top: 0, behavior: 'instant' });
      } catch (e) {}
    }
  }
}

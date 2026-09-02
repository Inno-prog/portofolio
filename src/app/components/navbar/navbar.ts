import { Component, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

import { I18nService } from '../../services/i18n.service';
import { ThemeService } from '../../services/theme.service';

export interface NavItem {
  label?: string;
  labelKey?: string;
  sectionId?: string;
  route?: string;
  externalUrl?: string;
  action?: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit, OnDestroy {
  mobileOpen = false;
  activeSection = 'home';
  private initialLoad = true;

  private observer?: IntersectionObserver;

  leftLinks: NavItem[] = [
    { labelKey: 'nav_accueil', sectionId: 'home' },
    { labelKey: 'nav_about', sectionId: 'about' },
    { labelKey: 'nav_resume', sectionId: 'experience' },
  ];

  rightLinks: NavItem[] = [
    { labelKey: 'nav_portfolio', sectionId: 'projects' },
    { labelKey: 'nav_contact', sectionId: 'contact' },
    { labelKey: 'nav_services', sectionId: 'services' },
  ];

  get allLinks() {
    return [...this.leftLinks, ...this.rightLinks];
  }

  constructor(private router: Router, public i18n: I18nService, public theme: ThemeService) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          if (!this.initialLoad) {
            this.handleHashAndScroll();
          }
          this.initialLoad = false;
        }, 50);
      });
  }

  ngAfterViewInit() {
    this.setupObserver();
    setTimeout(() => {
      this.initialLoad = false;
    }, 200);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  private setupObserver() {
    this.observer = new IntersectionObserver(entries => {
      // On prend la section la plus visible
      let best: { id: string; ratio: number } | null = null;
      for (const entry of entries) {
        const id = (entry.target as HTMLElement).id;
        if (!id) continue;
        if (entry.isIntersecting) {
          if (!best || entry.intersectionRatio > best.ratio) {
            best = { id, ratio: entry.intersectionRatio };
          }
        }
      }
      if (best) this.activeSection = (best as { id: string; ratio: number }).id;
    }, { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });

    setTimeout(() => {
      document.querySelectorAll('.home-section').forEach(el => this.observer!.observe(el));
    }, 100);
  }

  private handleHashAndScroll() {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    setTimeout(() => this.scrollToSection(hash), 200);
  }

  isActiveSection(sectionId?: string) {
    return !!sectionId && this.activeSection === sectionId;
  }

  handleClick(item: NavItem) {
    this.mobileOpen = false;
    try { document.body.classList.remove('no-scroll'); } catch (e) {}
    if (item.externalUrl) { window.open(item.externalUrl, '_blank'); return; }
    if (item.action === 'cv') { window.open('/assets/cv-innocent-dembele.pdf', '_blank'); return; }
    if (item.sectionId) { this.scrollToSection(item.sectionId); return; }
    if (item.route) { this.router.navigate([item.route]); }
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const offset = 70;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      history.replaceState(null, '', '#' + id);
    }
  }

  @HostListener('window:hashchange')
  onHashChange() {
    this.handleHashAndScroll();
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
    try {
      if (this.mobileOpen) document.body.classList.add('no-scroll');
      else document.body.classList.remove('no-scroll');
    } catch (e) {}
  }

  setLang(lang: 'fr' | 'en') { this.i18n.setLang(lang); }
  toggleTheme() { this.theme.toggle(); }
}

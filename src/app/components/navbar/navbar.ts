import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

import { I18nService } from '../../services/i18n.service';
import { ThemeService } from '../../services/theme.service';

export interface NavItem {
  label?: string;
  labelKey?: string;
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
export class Navbar {
  mobileOpen = false;

  private currentPath = '';

  leftLinks: NavItem[] = [
    { labelKey: 'nav_accueil', route: '/' },
    { labelKey: 'nav_about', route: '/about' },
    { labelKey: 'nav_resume', route: '/experience' },
  ];

  rightLinks: NavItem[] = [
    { labelKey: 'nav_portfolio', route: '/projects' },
    { labelKey: 'nav_contact', route: '/contact' },
    { labelKey: 'nav_services', route: '/services' },
  ];

  get allLinks() {
    return [...this.leftLinks, ...this.rightLinks];
  }

  constructor(private router: Router, public i18n: I18nService, public theme: ThemeService) {
    this.currentPath = this.router.url.split('?')[0];

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        this.currentPath = e.urlAfterRedirects.split('?')[0];
      });
  }

  isActiveRoute(route?: string) {
    if (!route) return false;
    const normalized = route.split('?')[0];
    return this.currentPath === normalized;
  }


  handleClick(item: NavItem) {
    this.mobileOpen = false;
    try { document.body.classList.remove('no-scroll'); } catch(e) {}
    if (item.externalUrl) { window.open(item.externalUrl, '_blank'); return; }
    if (item.action === 'cv') { window.open('/assets/cv-innocent-dembele.pdf', '_blank'); return; }
    if (item.route) { this.router.navigate([item.route]); }
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
    try {
      if (this.mobileOpen) document.body.classList.add('no-scroll');
      else document.body.classList.remove('no-scroll');
    } catch(e) {}
  }

  setLang(lang: 'fr' | 'en') { this.i18n.setLang(lang); }
  toggleTheme() { this.theme.toggle(); }
}

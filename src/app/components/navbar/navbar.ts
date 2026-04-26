import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ScreenSizeService } from '../../services/screen-size.service';

export interface NavItem {
  label: string;
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
  screenSize = inject(ScreenSizeService);

  leftLinks: NavItem[] = [
    { label: 'Accueil', route: '/' },
    { label: 'A propos', route: '/about' },
    { label: 'Resume', route: '/experience' },
  ];

  rightLinks: NavItem[] = [
    { label: 'Portofolio', route: '/projects' },
    { label: 'Contact', route: '/contact' },
    { label: 'Services', route: '/services' },
  ];

  constructor(private router: Router) {}

  handleClick(item: NavItem) {
    if (item.externalUrl) { window.open(item.externalUrl, '_blank'); return; }
    if (item.action === 'cv') { window.open('/assets/cv-innocent-dembele.pdf', '_blank'); return; }
    if (item.route) { this.router.navigate([item.route]); }
  }
}

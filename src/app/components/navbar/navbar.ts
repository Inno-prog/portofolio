import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface NavItem {
  label: string;
  route?: string;
  externalUrl?: string;
  action?: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isScrolled = signal(false);
  isMenuOpen = signal(false);
  activeMobileMenu = signal<string | null>(null);

  navLinks: NavItem[] = [
    { label: 'Accueil', route: '/' },
    {
      label: 'À propos',
      route: '/about',
      children: [
        { label: 'Qui suis-je au juste ?', route: '/about' },
        { label: 'Mon cursus', route: '/about' },
        { label: 'Mes universités', route: '/about' },
      ],
    },
    {
      label: 'Projets',
      route: '/projects',
      children: [
        { label: 'Voir mes projets', route: '/projects' },
        { label: 'Voir GitHub', externalUrl: 'https://github.com/Inno-prog' },
      ],
    },
    {
      label: 'Expérience',
      route: '/experience',
      children: [
        { label: 'Expériences', route: '/experience' },
        { label: 'Attestations', action: 'attestations' },
        { label: 'Formations', action: 'formations' },
        { label: 'CV', action: 'cv' },
      ],
    },
    {
      label: 'Contact',
      route: '/contact',
      children: [
        { label: 'Joindre sur WhatsApp', externalUrl: 'https://wa.me/qr/UYCVF3ADDIURN1' },
        { label: 'Envoyer un mail', externalUrl: 'mailto:dembeleinnocent440@gmail.com' },
        { label: 'Appeler direct', externalUrl: 'tel:+22606013165' },
        { label: 'Formulaire de contact', route: '/contact' },
      ],
    },
  ];

  constructor(private router: Router) {}

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu(label: string) {
    this.activeMobileMenu.set(this.activeMobileMenu() === label ? null : label);
  }

  handleClick(item: NavItem) {
    this.isMenuOpen.set(false);
    this.activeMobileMenu.set(null);
    if (item.externalUrl) { window.open(item.externalUrl, '_blank'); return; }
    if (item.action === 'cv') { window.open('/assets/cv-innocent-dembele.pdf', '_blank'); return; }
    if (item.route) { this.router.navigate([item.route]); }
  }
}

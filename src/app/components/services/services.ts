import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  constructor(public i18n: I18nService) {}
  services = [
    {
      titleKey: 'service_poster_title',
      descKey: 'service_poster_desc',
      image: "assets/création d'affiche.png",
      svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="#16a34a" stroke-width="2"/>
        <path d="M14 16h20M14 22h14M14 28h18" stroke="#16a34a" stroke-width="2" stroke-linecap="round"/>
        <path d="M30 32l4-8 4 8" stroke="#16a34a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="16" cy="12" r="2" fill="#16a34a"/>
      </svg>`,
    },
    {
      titleKey: 'service_install_title',
      descKey: 'service_install_desc',
      image: "assets/installation de logiciel.png",
      svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="36" height="24" rx="3" stroke="#16a34a" stroke-width="2"/>
        <path d="M16 34v4M32 34v4M12 38h24" stroke="#16a34a" stroke-width="2" stroke-linecap="round"/>
        <path d="M24 16v10M19 21l5 5 5-5" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      titleKey: 'service_updates_title',
      descKey: 'service_updates_desc',
      image: "assets/mises à jour de pilote.png",
      svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="14" stroke="#16a34a" stroke-width="2"/>
        <circle cx="24" cy="24" r="4" fill="#16a34a"/>
        <path d="M24 10v4M24 34v4M10 24h4M34 24h4" stroke="#16a34a" stroke-width="2" stroke-linecap="round"/>
        <path d="M15 15l2.8 2.8M30.2 30.2L33 33M15 33l2.8-2.8M30.2 17.8L33 15" stroke="#16a34a" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`,
    },
    {
      titleKey: 'service_ppt_title',
      descKey: 'service_ppt_desc',
      image: "assets/création de powerpoint.png",
      svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="36" height="26" rx="3" stroke="#16a34a" stroke-width="2"/>
        <path d="M18 34v6M30 34v6M12 40h24" stroke="#16a34a" stroke-width="2" stroke-linecap="round"/>
        <rect x="12" y="14" width="10" height="14" rx="1.5" stroke="#16a34a" stroke-width="1.5"/>
        <path d="M26 16h8M26 20h6M26 24h8" stroke="#16a34a" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`,
    },
    {
      titleKey: 'service_activation_title',
      descKey: 'service_activation_desc',
      image: "assets/activation d'aoffice.png",
      svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="14" height="14" rx="2" stroke="#16a34a" stroke-width="2"/>
        <rect x="26" y="8" width="14" height="14" rx="2" stroke="#16a34a" stroke-width="2"/>
        <rect x="8" y="26" width="14" height="14" rx="2" stroke="#16a34a" stroke-width="2"/>
        <rect x="26" y="26" width="14" height="14" rx="2" stroke="#16a34a" stroke-width="2"/>
        <path d="M32 31v6M29 34h6" stroke="#16a34a" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
    },
    {
      titleKey: 'service_dev_title',
      descKey: 'service_dev_desc',
      image: "assets/développement d'application.png",
      svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="16" stroke="#16a34a" stroke-width="2"/>
        <path d="M8 24h32M24 8c-4 4-6 10-6 16s2 12 6 16M24 8c4 4 6 10 6 16s-2 12-6 16" stroke="#16a34a" stroke-width="1.5"/>
      </svg>`,
    },
  ];
}

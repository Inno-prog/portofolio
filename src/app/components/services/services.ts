import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  services = [
    {
      title: "Création d'affiches",
      desc: "Conception d'affiches professionnelles, flyers et supports visuels percutants pour vos événements et promotions.",
      svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="32" height="36" rx="3" stroke="#f97316" stroke-width="2"/>
        <path d="M14 16h20M14 22h14M14 28h18" stroke="#f97316" stroke-width="2" stroke-linecap="round"/>
        <path d="M30 32l4-8 4 8" stroke="#f97316" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="16" cy="12" r="2" fill="#f97316"/>
      </svg>`,
    },
    {
      title: 'Installation de logiciels',
      desc: "Installation et configuration de tous types de logiciels sur Windows. Mise en place rapide et fiable.",
      svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="36" height="24" rx="3" stroke="#f97316" stroke-width="2"/>
        <path d="M16 34v4M32 34v4M12 38h24" stroke="#f97316" stroke-width="2" stroke-linecap="round"/>
        <path d="M24 16v10M19 21l5 5 5-5" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
    {
      title: 'Mises à jour & pilotes',
      desc: "Mise à jour du système d'exploitation, installation de pilotes matériels pour optimiser les performances de votre PC.",
      svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="14" stroke="#f97316" stroke-width="2"/>
        <circle cx="24" cy="24" r="4" fill="#f97316"/>
        <path d="M24 10v4M24 34v4M10 24h4M34 24h4" stroke="#f97316" stroke-width="2" stroke-linecap="round"/>
        <path d="M15 15l2.8 2.8M30.2 30.2L33 33M15 33l2.8-2.8M30.2 17.8L33 15" stroke="#f97316" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`,
    },
    {
      title: 'Présentations PowerPoint',
      desc: "Création de présentations PowerPoint élégantes et percutantes pour vos réunions, soutenances et conférences.",
      svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="36" height="26" rx="3" stroke="#f97316" stroke-width="2"/>
        <path d="M18 34v6M30 34v6M12 40h24" stroke="#f97316" stroke-width="2" stroke-linecap="round"/>
        <rect x="12" y="14" width="10" height="14" rx="1.5" stroke="#f97316" stroke-width="1.5"/>
        <path d="M26 16h8M26 20h6M26 24h8" stroke="#f97316" stroke-width="1.5" stroke-linecap="round"/>
      </svg>`,
    },
    {
      title: 'Activation Windows & Office',
      desc: "Activation de Windows, Microsoft Office et autres logiciels bureautiques. Service rapide et garanti.",
      svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="14" height="14" rx="2" stroke="#f97316" stroke-width="2"/>
        <rect x="26" y="8" width="14" height="14" rx="2" stroke="#f97316" stroke-width="2"/>
        <rect x="8" y="26" width="14" height="14" rx="2" stroke="#f97316" stroke-width="2"/>
        <rect x="26" y="26" width="14" height="14" rx="2" stroke="#f97316" stroke-width="2"/>
        <path d="M32 31v6M29 34h6" stroke="#f97316" stroke-width="2" stroke-linecap="round"/>
      </svg>`,
    },
    {
      title: 'Développement Web & Mobile',
      desc: "Création de sites web et applications mobiles modernes, responsives et performants avec Angular, Spring Boot et Flutter.",
      svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="16" stroke="#f97316" stroke-width="2"/>
        <path d="M8 24h32M24 8c-4 4-6 10-6 16s2 12 6 16M24 8c4 4 6 10 6 16s-2 12-6 16" stroke="#f97316" stroke-width="1.5"/>
      </svg>`,
    },
  ];
}

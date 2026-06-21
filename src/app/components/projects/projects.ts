import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  webProjects = [
    { title: 'Portfolio Personnel', desc: 'Site portfolio développé avec Angular 20, Spring Boot et Tailwind CSS.', techs: ['Angular', 'TypeScript', 'Tailwind'], url: '', img: 'assets/portofolio.png' },
    { title: 'Plateforme de suivi de prestations de maintenance au profit de la DGSI', desc: 'Application de suivi des maintenances informatiques (SUMIO DGSI) — gestion des prestations, suivi sécurisé et ordres de commandes.', techs: ['Angular', 'Spring Boot', 'PostgreSQL'], url: '', img: 'assets/dgsi.png' },
    { title: 'Application de demandes de stages', desc: 'Plateforme de demande de stage.', techs: ['Next.js', 'Node.js', 'MySQL'], url: '', img: 'assets/stage.png' },
  ];

  mobileProjects = [
    { title: 'Version Mobile du Portfolio', desc: 'Application mobile Flutter — version mobile de mon portfolio personnel.', techs: ['Flutter', 'Dart'], img: 'assets/mobile.png', url: '' },
    { title: 'App de conversion de fichier', desc: 'Application de convertion de fichier de tout type.', techs: ['Flutter', 'Spring Boot'], img: '', url: '' },
  ];

  otherProjects = [
    { title: 'API REST Spring Boot', desc: 'API REST sécurisée avec Spring Security et JWT.', techs: ['Java', 'Spring Boot', 'JWT'], img: '', url: '' },
    { title: 'Dashboard Analytics', desc: 'Tableau de bord avec graphiques et statistiques.', techs: ['Angular', 'Chart.js', 'TypeScript'], img: '', url: '' },
  ];
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  webProjects = [
    { title: 'Portfolio Personnel', desc: 'Site portfolio développé avec Angular 20 , spring-boot et Tailwind CSS.', techs: ['Angular', 'TypeScript', 'Tailwind'], url: '' },
    { title: 'App de suivi de prestations de maintenance informatique', desc: 'Application de suivi des maintenances informatiques', techs: ['Angular', 'Spring Boot', 'PostgreSQL'], url: '' },
    { title: 'Appication de demandes de stages', desc: 'Plateforme de demande de stage.', techs: ['Next.js', 'Node.js', 'MySQL'], url: '' },
  ];

  mobileProjects = [
    { title: 'App Mobile Flutter', desc: 'Application mini-marcketplace', techs: ['Flutter', 'Dart', 'postgresql$'] },
    { title: 'App de conversion de fichier', desc: 'Application de convertion de fichier de tout type.', techs: ['Flutter', 'Spring Boot',] },
  ];

  otherProjects = [
    { title: 'API REST Spring Boot', desc: 'API REST sécurisée avec Spring Security et JWT.', techs: ['Java', 'Spring Boot', 'JWT'] },
    { title: 'Dashboard Analytics', desc: 'Tableau de bord avec graphiques et statistiques.', techs: ['Angular', 'Chart.js', 'TypeScript'] },
  ];
}

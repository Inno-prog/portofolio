import { Component, OnInit } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { PortfolioService } from '../../services/portfolio';
import { Project } from '../../models/portfolio.models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  webProjects: any[] = [];
  mobileProjects: any[] = [];
  otherProjects: any[] = [];
  loading = true;

  private readonly DEMO_URL = 'https://portofolio-eta-azure.vercel.app/';

  constructor(private portfolio: PortfolioService) {}

  ngOnInit() {
    this.setDefaultProjects();
    this.portfolio.getProjects().subscribe({
      next: (projects) => {
        this.mergeApiProjects(projects);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  private setDefaultProjects() {
    this.webProjects = [
      {
        title: 'Portfolio Personnel',
        desc: 'Site portfolio développé avec Angular 20, Spring Boot et Tailwind CSS.',
        techs: ['Angular', 'TypeScript', 'Tailwind'],
        url: this.DEMO_URL,
        github: 'https://github.com/Inno-prog/portofolio',
        img: 'assets/portofolio.png'
      },
      {
        title: 'Plateforme de suivi de prestations de maintenance au profit de la DGSI',
        desc: "Application de suivi des maintenances informatiques (SUMIO DGSI) — gestion des prestations, suivi sécurisé et ordres de commandes.",
        techs: ['Angular', 'Spring Boot', 'PostgreSQL'],
        url: '',
        github: 'https://github.com/Inno-prog',
        img: 'assets/dgsi.png'
      },
      {
        title: 'Application de demandes de stages',
        desc: 'Plateforme de demande de stage.',
        techs: ['Next.js', 'Node.js', 'MySQL'],
        url: '',
        github: 'https://github.com/Inno-prog',
        img: 'assets/stage.png'
      },
    ];

    this.mobileProjects = [
      {
        title: 'Version Mobile du Portfolio',
        desc: 'Application mobile Flutter — version mobile de mon portfolio personnel.',
        techs: ['Flutter', 'Dart'],
        img: 'assets/mobile.png',
        url: this.DEMO_URL,
        github: 'https://github.com/Inno-prog'
      },
      {
        title: 'App de conversion de fichier',
        desc: 'Application de convertion de fichier de tout type.',
        techs: ['Flutter', 'Spring Boot'],
        img: '',
        url: '',
        github: 'https://github.com/Inno-prog'
      },
    ];

    this.otherProjects = [
      {
        title: 'API REST Spring Boot',
        desc: 'API REST sécurisée avec Spring Security et JWT.',
        techs: ['Java', 'Spring Boot', 'JWT'],
        img: '',
        url: '',
        github: 'https://github.com/Inno-prog'
      },
      {
        title: 'Dashboard Analytics',
        desc: 'Tableau de bord avec graphiques et statistiques.',
        techs: ['Angular', 'Chart.js', 'TypeScript'],
        img: '',
        url: '',
        github: 'https://github.com/Inno-prog'
      },
    ];
  }

  private mergeApiProjects(apiProjects: Project[]) {
    const seen = new Set<string>([
      ...this.webProjects.map(p => p.title),
      ...this.mobileProjects.map(p => p.title),
      ...this.otherProjects.map(p => p.title),
    ]);

    for (const p of apiProjects) {
      if (seen.has(p.title)) continue;
      const entry = {
        title: p.title,
        desc: p.description,
        techs: p.technologies,
        url: p.liveUrl,
        github: p.githubUrl,
        img: p.imageUrl || ''
      };
      if (p.technologies.some(t => /flutter|react native|ios|android|swift|kotlin|dart/i.test(t))) {
        this.mobileProjects.push(entry);
      } else if (p.technologies.some(t => /angular|react|vue|next|html|css|tailwind|node|express/i.test(t))) {
        this.webProjects.push(entry);
      } else {
        this.otherProjects.push(entry);
      }
    }
  }
}

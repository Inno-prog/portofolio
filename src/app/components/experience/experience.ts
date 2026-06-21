import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { I18nService } from '../../services/i18n.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences = [];

  domains = [
    {
      techs: ['HTML', 'CSS', 'Angular', 'Next.js', 'Python', 'Flutter'],
      tKey: 'devFrontend',
      descKey: 'devFrontendDesc'
    },
    {
      techs: ['Spring Boot', 'FastAPI (Python)'],
      tKey: 'backend',
      descKey: 'backendDesc'
    },
    {
      techs: ['PostgreSQL', 'MySQL', 'Supabase'],
      tKey: 'databases',
      descKey: 'databasesDesc'
    },
    {
      techs: ['Postman', 'Insomnia', 'Docker'],
      tKey: 'tools',
      descKey: 'toolsDesc'
    },
    {
      techs: ['Canva', 'Photoshop'],
      tKey: 'design',
      descKey: 'designDesc'
    }
  ];

  formations = [
    { diplome: 'Licence 3 — Informatique (terminé)', etablissement: 'IBAM, Ouagadougou', annee: '2024 — 2025' },
    { diplome: 'Licence 2 — Informatique', etablissement: 'IBAM, Ouagadougou', annee: '2023 — 2024' },
    { diplome: 'Licence 1 — Informatique', etablissement: 'IBAM, Ouagadougou', annee: '2022 — 2023' },
    { diplome: 'Baccalauréat Série D', etablissement: 'Petit Séminaire Saint Paul de Tionkuy', annee: '2021 — 2022' },
  ];

  certifications = [
    { titreKey: 'angularCert', orgKey: 'autoPractice' },
    { titreKey: 'springCert', orgKey: 'autoPractice' },
    { titreKey: 'flutterCert', orgKey: 'autoPractice' },
  ];

  langues = [
    { nomKey: 'french', niveauKey: 'native', pct: '100%' },
    { nomKey: 'english', niveauKey: 'intermediate', pct: '60%' },
    { nomKey: 'dioula', niveauKey: 'native', pct: '100%' },
  ];

  constructor(public i18n: I18nService, public theme: ThemeService) {}

  setLang(lang: 'fr' | 'en') { this.i18n.setLang(lang); }
  toggleTheme() { this.theme.toggle(); }
}

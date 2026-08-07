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
  domains = [
    {
      icon: '🌐',
      techs: [
        { name: 'HTML', icon: '🌐', url: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
        { name: 'CSS', icon: '🎨', url: 'https://developer.mozilla.org/fr/docs/Web/CSS' },
        { name: 'Angular', icon: '🅰️', url: 'https://angular.dev/' },
        { name: 'Next.js', icon: '▲', url: 'https://nextjs.org/' },
        { name: 'Python', icon: '🐍', url: 'https://www.python.org/' },
        { name: 'Flutter', icon: '💙', url: 'https://flutter.dev/' }
      ],
      tKey: 'devFrontend',
      descKey: 'devFrontendDesc'
    },
    {
      icon: '⚙️',
      techs: [
        { name: 'Spring Boot', icon: '🍃', url: 'https://spring.io/projects/spring-boot' },
        { name: 'FastAPI', icon: '⚡', url: 'https://fastapi.tiangolo.com/' }
      ],
      tKey: 'backend',
      descKey: 'backendDesc'
    },
    {
      icon: '🗄️',
      techs: [
        { name: 'PostgreSQL', icon: '🐘', url: 'https://www.postgresql.org/' },
        { name: 'MySQL', icon: '🗄️', url: 'https://www.mysql.com/' },
        { name: 'Supabase', icon: '⚡', url: 'https://supabase.com/' }
      ],
      tKey: 'databases',
      descKey: 'databasesDesc'
    },
    {
      icon: '🧪',
      techs: [
        { name: 'Postman', icon: '📮', url: 'https://www.postman.com/' },
        { name: 'Insomnia', icon: '💤', url: 'https://insomnia.rest/' },
        { name: 'Docker', icon: '🐳', url: 'https://www.docker.com/' }
      ],
      tKey: 'tools',
      descKey: 'toolsDesc'
    },
    {
      icon: '🎨',
      techs: [
        { name: 'Canva', icon: '🖌️', url: 'https://www.canva.com/' },
        { name: 'Photoshop', icon: '🖼️', url: 'https://www.adobe.com/products/photoshop.html' }
      ],
      tKey: 'design',
      descKey: 'designDesc'
    }
  ];

  formations = [
    { diplome: 'Licence 3 — Informatique (terminé)', etablissement: 'IBAM, Ouagadougou', annee: '2024 — 2025', commentaire: 'Licence en informatique, option programmation et génie logiciel. Projet de fin d\'études et spécialisation développement web/mobile.' },
    { diplome: 'Licence 2 — Informatique', etablissement: 'IBAM, Ouagadougou', annee: '2023 — 2024', commentaire: 'Deuxième année de licence : approfondissement des algorithmes, bases de données, programmation orientée objet et développement d\'applications.' },
    { diplome: 'Licence 1 — Informatique', etablissement: 'IBAM, Ouagadougou', annee: '2022 — 2023', commentaire: 'Première année de licence : introduction au génie logiciel, structures de données, réseaux et développement web.' },
    { diplome: 'Baccalauréat Série D', etablissement: 'Petit Séminaire Saint Paul de Tionkuy', annee: '2021 — 2022', commentaire: 'Baccalauréat série D, orienté mathématiques et sciences physiques. Bonne base analytique pour l\'informatique.' },
  ];

  certifications = [
    { titreKey: 'angularCert', orgKey: 'autoPractice', image: null },
    { titreKey: 'springCert',  orgKey: 'autoPractice', image: null },
    { titreKey: 'flutterCert', orgKey: 'autoPractice', image: null },
    { titreKey: 'backendCert', orgKey: 'backendCertOrg', image: '/assets/cert-backend.png' },
    { titreKey: 'iaCert',      orgKey: 'iaCertOrg',      image: '/assets/cert-ia.png' },
  ];

  langues = [
    { nomKey: 'french',  niveauKey: 'native',      pct: '100%', flag: '🇫🇷' },
    { nomKey: 'english', niveauKey: 'intermediate', pct: '60%',  flag: '🇬🇧' },
    { nomKey: 'dioula',  niveauKey: 'native',       pct: '100%', flag: '🇧🇫' },
  ];

  constructor(public i18n: I18nService, public theme: ThemeService) {}

  setLang(lang: 'fr' | 'en') { this.i18n.setLang(lang); }
  toggleTheme() { this.theme.toggle(); }
}

import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(public i18n: I18nService) {}

  downloadCv() {
    window.open('/assets/cv-innocent-dembele.pdf', '_blank');
  }

  skills = [
    { category: 'Angular / TypeScript', level: '85%' },
    { category: 'Spring Boot / Java', level: '80%' },
    { category: 'Flutter / Dart', level: '70%' },
    { category: 'PostgreSQL / MySQL', level: '75%' },
    { category: 'Docker / Git', level: '65%' },
  ];

  personalInfo = [
    { label: 'Nom complet', value: 'DEMBELE Innocent' },
    { label: 'Nationalité', value: 'Burkinabè' },
    { label: 'Email', value: 'dembeleinnocent440@gmail.com' },
    { label: 'Phone', value: '+226 06 01 31 65' },
    { label: 'Address', value: 'Ouagadougou, Burkina Faso' },
    { label: 'Disponibilité', value: 'Immédiate' },
  ];

  socials = [
    { icon: '✉️', label: 'Email', url: 'mailto:dembeleinnocent440@gmail.com' },
    { icon: '💬', label: 'WhatsApp', url: 'https://wa.me/qr/UYCVF3ADDIURN1' },
    { icon: '🔗', label: 'LinkedIn', url: 'https://www.linkedin.com/in/innocent-d-266b97302/' },
    { icon: '🐙', label: 'GitHub', url: 'https://github.com/Inno-prog' },
  ];

  expertise = [
    { icon: '⚙️', title: 'Développement Frontend', desc: 'Angular, Next.js, TypeScript, Tailwind CSS' },
    { icon: '🔧', title: 'Développement Backend', desc: 'Spring Boot, Java, REST API, JWT' },
    { icon: '📱', title: 'Développement Mobile', desc: 'Flutter, Dart, applications cross-platform' },
    { icon: '🗄️', title: 'Base de données', desc: 'PostgreSQL, MySQL, Supabase' },
    { icon: '🎨', title: 'UI / UX Design', desc: 'Interfaces modernes, responsive et accessibles' },
  ];
}

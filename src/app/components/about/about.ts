import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

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

  expertise = [
    { icon: '⚙️', title: 'Développement Frontend', desc: 'Angular, Next.js, TypeScript, Tailwind CSS' },
    { icon: '🔧', title: 'Développement Backend', desc: 'Spring Boot, Java, REST API, JWT' },
    { icon: '📱', title: 'Développement Mobile', desc: 'Flutter, Dart, applications cross-platform' },
    { icon: '🗄️', title: 'Base de données', desc: 'PostgreSQL, MySQL, Supabase' },
    { icon: '🎨', title: 'UI / UX Design', desc: 'Interfaces modernes, responsive et accessibles' },
  ];
}

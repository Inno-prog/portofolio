import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  activeTab = signal<string>('qui');

  // CV viewer
  showCv = signal(false);

  // Protection infos sensibles
  showPrivate = signal(false);
  passwordInput = signal('');
  passwordError = signal(false);
  showPasswordModal = signal(false);
  private readonly SECRET = 'innocode2025';

  openPasswordModal() {
    this.passwordInput.set('');
    this.passwordError.set(false);
    this.showPasswordModal.set(true);
  }

  checkPassword() {
    if (this.passwordInput() === this.SECRET) {
      this.showPrivate.set(true);
      this.showPasswordModal.set(false);
      this.passwordError.set(false);
    } else {
      this.passwordError.set(true);
    }
  }

  lockPrivate() {
    this.showPrivate.set(false);
    this.passwordInput.set('');
  }

  skills = [
    { category: 'Frontend', icon: '🎨', items: ['Angular', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'] },
    { category: 'Mobile', icon: '📱', items: ['Flutter', 'React Native', 'Dart'] },
    { category: 'Backend', icon: '⚙️', items: ['Spring Boot', 'Java', 'Node.js', 'REST API', 'JWT'] },
    { category: 'Base de données', icon: '🗄️', items: ['PostgreSQL', 'MySQL', 'Supabase'] },
    { category: 'DevOps & Outils', icon: '🛠️', items: ['GitHub Actions', 'Maven', 'npm', 'Git', 'Docker'] },
    { category: 'Langues', icon: '🌍', items: ['Français (natif)', 'Anglais', 'Dioula'] },
  ];

  cursus = [
    { year: '2014–2015', diplome: 'Certificat d\'Études Primaires (CEP)', etablissement: 'École Notre Dame du Rosaire de Bomborokuy', icon: '🏫' },
    { year: '2018–2019', diplome: 'Brevet d\'Études du Premier Cycle (BEPC)', etablissement: 'Petit Séminaire Saint Paul de Tionkuy', icon: '📘' },
    { year: '2021–2022', diplome: 'Baccalauréat Série D', etablissement: 'Petit Séminaire Saint Paul de Tionkuy', icon: '🎓' },
    { year: '2022–2023', diplome: 'Licence 1 — Informatique', etablissement: 'Institut Burkinabè des Arts et Métiers (IBAM)', icon: '💻' },
    { year: '2023–2024', diplome: 'Licence 2 — Informatique', etablissement: 'Institut Burkinabè des Arts et Métiers (IBAM)', icon: '💻' },
    { year: '2024–2025', diplome: 'Licence 3 — Informatique (en cours)', etablissement: 'Institut Burkinabè des Arts et Métiers (IBAM)', icon: '🚀' },
  ];

  universites = [
    {
      nom: 'Institut Burkinabè des Arts et Métiers (IBAM)',
      periode: '2022 — Présent',
      niveau: 'Licence en Informatique',
      description: 'Formation en développement logiciel, algorithmique, bases de données et génie logiciel. Spécialisation en développement web et mobile.',
      localisation: 'Ouagadougou, Burkina Faso',
      icon: '🏛️',
      actuel: true,
    },
    {
      nom: 'Petit Séminaire Saint Paul de Tionkuy',
      periode: '2015 — 2022',
      niveau: 'Secondaire — Baccalauréat Série D',
      description: 'Formation générale scientifique avec spécialisation en sciences naturelles et mathématiques.',
      localisation: 'Tionkuy, Burkina Faso',
      icon: '🏫',
      actuel: false,
    },
  ];

  qualites = [
    { label: 'Travail en équipe', icon: '🤝' },
    { label: 'Discret & souriant', icon: '😊' },
    { label: 'Adaptable', icon: '🔄' },
    { label: 'Persévérant', icon: '💪' },
    { label: 'Passionné d\'IA', icon: '🤖' },
    { label: 'Curieux', icon: '🔍' },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences = [
    { poste: 'Développeur Full Stack', entreprise: 'Projet Personnel', periode: '2023 — Présent', desc: 'Développement d\'applications web et mobiles avec Angular, Spring Boot et Flutter.' },
    { poste: 'Développeur Frontend', entreprise: 'Stage / Freelance', periode: '2022 — 2023', desc: 'Intégration d\'interfaces web responsives avec Angular et Tailwind CSS.' },
  ];

  formations = [
    { diplome: 'Licence 3 — Informatique (terminé)', etablissement: 'IBAM, Ouagadougou', annee: '2024 — 2025' },
    { diplome: 'Licence 2 — Informatique', etablissement: 'IBAM, Ouagadougou', annee: '2023 — 2024' },
    { diplome: 'Licence 1 — Informatique', etablissement: 'IBAM, Ouagadougou', annee: '2022 — 2023' },
    { diplome: 'Baccalauréat Série D', etablissement: 'Petit Séminaire Saint Paul de Tionkuy', annee: '2021 — 2022' },
  ];

  certifications = [
    { titre: 'Angular Developer', organisme: 'Auto-formation & pratique' },
    { titre: 'Spring Boot REST API', organisme: 'Auto-formation & pratique' },
    { titre: 'Flutter Mobile Dev', organisme: 'Auto-formation & pratique' },
  ];

  langues = [
    { nom: 'Français', niveau: 'Natif', pct: '100%' },
    { nom: 'Anglais', niveau: 'Intermédiaire', pct: '60%' },
    { nom: 'Dioula', niveau: 'Natif', pct: '100%' },
  ];
}

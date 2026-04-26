import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  col1 = [
    {
      icon: '🎨',
      title: "Création d'affiches",
      desc: "Conception d'affiches professionnelles, flyers et supports visuels pour vos événements et promotions.",
    },
    {
      icon: '💻',
      title: 'Installation de logiciels',
      desc: "Installation et configuration de tous types de logiciels sur Windows et autres systèmes.",
    },
    {
      icon: '🔧',
      title: 'Mises à jour et installation de pilotes',
      desc: "Mise à jour du système, installation de pilotes matériels pour optimiser les performances.",
    },
  ];

  col2 = [
    {
      icon: '📊',
      title: 'Création de présentations PowerPoint',
      desc: "Conception de présentations PowerPoint élégantes et percutantes pour vos réunions et soutenances.",
    },
    {
      icon: '🪟',
      title: 'Activation de Windows et logiciels bureautiques',
      desc: "Activation de Windows, Microsoft Office et autres logiciels bureautiques.",
    },
  ];
}

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/hero/hero').then(m => m.Hero) },
  { path: 'about', loadComponent: () => import('./components/about/about').then(m => m.About) },
  { path: 'projects', loadComponent: () => import('./components/projects/projects').then(m => m.Projects) },
  { path: 'experience', loadComponent: () => import('./components/experience/experience').then(m => m.Experience) },
  { path: 'contact', loadComponent: () => import('./components/contact/contact').then(m => m.Contact) },
  { path: 'services', loadComponent: () => import('./components/services/services').then(m => m.Services) },
  { path: '**', redirectTo: '' },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then(m => m.Home),
  },
  { path: 'about', redirectTo: '/', pathMatch: 'full' },
  { path: 'services', redirectTo: '/', pathMatch: 'full' },
  { path: 'experience', redirectTo: '/', pathMatch: 'full' },
  { path: 'projects', redirectTo: '/', pathMatch: 'full' },
  { path: 'contact', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

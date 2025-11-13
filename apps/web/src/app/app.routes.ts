import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    // component: () => import('./layout/layout.component').then(m => m.LayoutComponent),
    children: [
      { path: 'chat', loadComponent: () => import('@bolo/ui/components').then(c => c.ChatWindow) },
      {
        path: 'banner',
        loadComponent: () => import('@bolo/ui/components').then(c => c.HeroBanner),
      },
      { path: '**', loadComponent: () => import('@bolo/ui/components').then(c => c.NotFound) },
    ],
  },
];

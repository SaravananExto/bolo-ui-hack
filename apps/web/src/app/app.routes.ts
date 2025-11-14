import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('@bolo/ui/components/login/login').then(m => m.LoginComponent),
  },
  {
    path: 'chat',
    loadComponent: () => import('./layout/layout').then(m => m.Layout),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@bolo/ui/components/chat-window/chat-window').then(c => c.ChatWindow),
      },
      {
        path: 'history/:view',
        loadComponent: () =>
          import('@bolo/ui/components/chat-window/chat-window').then(c => c.ChatWindow),
      },
    ],
  },
  { path: '**', loadComponent: () => import('@bolo/ui/components').then(c => c.NotFound) },
];

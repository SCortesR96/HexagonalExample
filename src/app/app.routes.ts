import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.routes')
  },
  {
    path: '**',
    redirectTo: 'products',
  }
];

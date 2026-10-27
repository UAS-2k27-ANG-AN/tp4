import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', loadChildren: () => import('./products/products.routes').then((route) => route.PRODUCTS_ROUTES) },
  { path: 'users', loadChildren: () => import('./users/users.routes').then((route) => route.USERS_ROUTES) },
  { path: '**', redirectTo: '' }
];

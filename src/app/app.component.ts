import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `<nav><a routerLink="/">Accueil</a><a routerLink="/products">Produits</a><a routerLink="/users">Utilisateurs</a></nav><hr><router-outlet />`
})
export class AppComponent {}

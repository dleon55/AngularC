import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  template: ` <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Auth0 App</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" routerLinkActive="active" routerLink="/home"
            >Home <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="['/precios']"
            >Precios</a
          >
        </li>
        <li *ngIf="auth.isAuthenticated$ | async" class="nav-item">
          <a
            class="nav-link"
            routerLinkActive="active"
            [routerLink]="['/protegida']"
            >Protegido</a
          >
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link">
            <app-auth-button>Ingresar</app-auth-button>
          </a>
        </li>
      </ul>
    </div>
  </nav>`,
  styles: [],
})
export class NavbarComponent {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}
  autenticado(): boolean {
    return false;
  }
}

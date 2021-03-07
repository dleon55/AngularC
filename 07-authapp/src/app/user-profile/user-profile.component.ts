import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  template: `
    <div class="container">
      <div
        *ngIf="auth.user$ | async as user"
        class="card"
        style="width: 18rem;"
      >
        <img src="{{ user.picture }}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">{{ user.email }}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ user.nickname }}</li>
            <li class="list-group-item">
              Verificado: {{ user.email_verified }}
            </li>
            <li class="list-group-item">{{ user.sub }}</li>
          </ul>
          <p class="card-text">
            <small class="text-muted">{{ user.updated_at }}</small>
          </p>
        </div>
      </div>
    </div>
  `,
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {}
}

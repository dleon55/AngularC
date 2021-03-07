import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  template: `
    <div *ngIf="auth.user$ | async as user" class="card" style="width: 18rem;">
      <!-- <img src="..." class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text">{{ user.email }}</p>
      </div>
    </div>
  `,
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {}
}

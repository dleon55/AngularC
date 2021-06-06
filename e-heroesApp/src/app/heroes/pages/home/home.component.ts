import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container {
        margin: 10px;
      }
    `,
  ],
})
export class HomeComponent implements OnInit {
  get auth() {
    return this.authSer.auth;
  }
  // auth!: Auth
  constructor(private router: Router, private authSer: AuthService) {}

  ngOnInit(): void {}
  logout(): void {
    this.router.navigate(['/auth']);
  }
}

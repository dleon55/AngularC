import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authServ: AuthService) {}

  ngOnInit(): void {}
  login(): void {
    this.authServ.login().subscribe((resp) => {
      // console.log({ resp });
      if (resp.id) {
        this.router.navigate(['/heroes']);
      }
    });
  }
}

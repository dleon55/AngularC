import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../interfaces/auth.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      .mat-stepper-horizontal {
        margin-top: 8px;
      }

      .mat-form-field {
        margin-top: 16px;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isEditable = false;
  constructor(
    private router: Router,
    private authServ: AuthService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
  login(): void {
    this.authServ.login().subscribe((resp) => {
      // console.log({ resp });
      if (resp.id) {
        this.router.navigate(['/heroes']);
      }
    });
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
    UserProfileComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-08t0uqzt.us.auth0.com',
      clientId: 'igoxk9sykScgPZy7ZcKUVgYeludGjpQR'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

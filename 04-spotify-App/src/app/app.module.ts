import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { ArtistComponent } from "./components/artist/artist.component";
import { NavbarComponent } from "./components/share/navbar/navbar.component";
import { ROUTES } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true, relativeLinkResolution: 'legacy' }),
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}

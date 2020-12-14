import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localEs from "@angular/common/locales/es";
import localFr from "@angular/common/locales/fr";
import { AppComponent } from "./app.component";
import { CapitalizadoPipe } from "./pipes/capitalizado.pipe";
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { OcultarPipe } from './pipes/ocultar.pipe';
registerLocaleData(localEs);
registerLocaleData(localFr);
@NgModule({
  declarations: [AppComponent, CapitalizadoPipe, DomSeguroPipe, OcultarPipe],
  imports: [BrowserModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "es",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

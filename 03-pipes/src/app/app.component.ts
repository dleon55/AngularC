import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  nombre: string = "Capitán América";
  nombre2: string = "dAvId LeÓN gómEz";
  activar: boolean = true;
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.2345;
  fecha: Date = new Date();
  salario: number = 1234.5;
  idioma = "fr";
  videoUrl = "https://www.youtube.com/embed/DY_rFed96mg";

  heroe = {
    nombre: "David",
    clave: "León",
    edad: 32,
    direccion: { calle: "3ra Cerrada", casa: 22 },
  };

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("llego la data");
    }, 4500);
  });
}

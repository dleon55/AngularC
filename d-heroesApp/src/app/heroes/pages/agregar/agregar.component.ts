import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDelComponent } from '../../components/confirm-del/confirm-del.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    { id: 'Marvel', desc: 'Marvel Comics' },
  ];
  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };
  constructor(
    private heroesServ: HeroesService,
    private activatedR: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }
    this.activatedR.params
      .pipe(switchMap(({ id }) => this.heroesServ.getHeroe(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }
  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      this.mostrarSnakbar(`No se llevó a cabo la acción.`);
      return;
    }
    if (!this.heroe.id) {
      this.heroesServ.saveHero(this.heroe).subscribe((heroe) => {
        this.mostrarSnakbar(`Registro ${this.heroe.superhero} guardado.`);
        this.router.navigate(['/heroes', heroe.id]);
      });
    } else {
      this.heroesServ
        .actualizarHero(this.heroe)
        .subscribe((heroe) =>
          this.mostrarSnakbar(`Registro ${this.heroe.superhero} actualizado.`)
        );
    }
  }
  borrar() {
    const dialog = this.dialog.open(ConfirmDelComponent, {
      width: '250px',
      data: { ...this.heroe },
    });
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.heroesServ.borrarHero(this.heroe!).subscribe((resp) => {
          this.mostrarSnakbar(`Registro ${this.heroe.superhero} borrado.`);
          this.router.navigate(['/heroes']);
        });
      }
    });
  }
  mostrarSnakbar(mensaje: string) {
    this.snackBar.open(mensaje, 'ok!', { duration: 2000 });
  }
}

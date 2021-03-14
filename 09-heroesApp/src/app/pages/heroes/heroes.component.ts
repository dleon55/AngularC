import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: HeroeModel[] = [];
  loading = true;
  constructor(private heroesS: HeroesService) {}

  ngOnInit(): void {
    this.heroesS.getHeroes().subscribe((resp) => {
      this.heroes = resp;
      this.loading = false;
    });
  }
  borrarHero(heroe: any, i: number) {
    Swal.fire({
      title: 'Esta seguro?',
      text: `Está seguro que desea borrar a ${heroe.nombre}`,
      showConfirmButton: true,
      showCancelButton: true,
    }).then((resp) => {
      if (resp.value === true) {
        this.heroesS.borrarHeroe(heroe.id).subscribe();
        this.heroes.splice(i, 1);
      }
    });
  }
}

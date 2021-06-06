import { ConditionalExpr } from '@angular/compiler';
import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radious: 5px;
      }
    `,
  ],
})
export class HeroeComponent implements OnInit {
  idHeroe: any;
  heroe!: Heroe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroeService.getHeroe(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }
}

import { Heroe } from "./../../interfaces/heroe.interface";
import { HeroesService } from "./../../servicios/heroes.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.heroe = this.heroesService.getHeroe(params.id);
      console.log(params.id);
    });
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent implements OnInit {
  heroe: HeroeModel = new HeroeModel();
  constructor(private heroesS: HeroesService) {}

  ngOnInit(): void {}
  guardar(form: NgForm): void {
    if (!form.valid) {
      console.log('status', form.status);
      console.log('valido', form.valid);
      console.log('Formulario', form);
      return;
    }
    this.heroesS.crearHeroe(this.heroe).subscribe((resp) => {
      console.log(resp);
    });
  }
}

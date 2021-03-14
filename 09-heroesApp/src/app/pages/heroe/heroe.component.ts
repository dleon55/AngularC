import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from '../../models/heroe.model';
import { HeroesService } from '../../services/heroes.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent implements OnInit {
  heroe: HeroeModel = new HeroeModel();
  constructor(
    private heroesS: HeroesService,
    private activated: ActivatedRoute
  ) {}
  id: string = '';
  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get('id');
    if (!id||id==='0') {
      id = 'nuevo';
    }
    if (id !== '0' && id !== 'nuevo') {
      this.heroesS.getHeroe(id).subscribe((resp: any) => {
        this.heroe = resp;
        this.heroe.id = id ? id : 'nuevo';
        console.log({ resp });
      });
    }
    console.log({ id });
  }
  guardar(form: NgForm): void {
    if (!form.valid) {
      console.log('status', form.status);
      console.log('valido', form.valid);
      console.log('Formulario', form);
      return;
    }
    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      allowOutsideClick: false,
    });
    Swal.showLoading();
    let peticion: Observable<any>;

    if (this.heroe.id) {
      peticion = this.heroesS.actualizarHeroe(this.heroe);
    } else {
      peticion = this.heroesS.crearHeroe(this.heroe);
    }
    peticion.subscribe((resp) => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizó correctamente',
      });
    });
  }
}

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @ViewChild(IonList) lista: IonList;
  @Input() terminada = true;
  constructor(
    public deseoService: DeseosService,
    public router: Router,
    public alertCtrl: AlertController
  ) {}

  ngOnInit() {}
  listaSeleccionada(lista) {
    if (this.terminada) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }
  async editarLista(lista: Lista) {
    const alert = await this.alertCtrl.create({
      header: 'Editar lista',
      inputs: [
        { name: 'titulo', type: 'text', placeholder: 'Nombre de la lista' },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
            this.lista.closeSlidingItems();
          },
        },
        {
          text: 'Actualizar',
          handler: (data) => {
            console.log(data);
            if (data.titulo.length === 0) {
              return;
            }
            lista.titulo = data.titulo;
            this.deseoService.guardarStorage();
            this.lista.closeSlidingItems();
          },
        },
      ],
    });
    alert.present();
  }
  async agregarLista() {
    // this.router.navigateByUrl('tabs/tab1/agregar');
    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [
        { name: 'titulo', type: 'text', placeholder: 'Nombre de la lista' },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          },
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if (data.titulo.length === 0) {
              return;
            }
            // Crear la lista
            const listaId = this.deseoService.crearLista(data.titulo);
            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          },
        },
      ],
    });
    alert.present();
  }
  borrarLista(lista: Lista) {
    this.deseoService.borrarLista(lista);
  }
}

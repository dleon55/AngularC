import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor() {
    console.log('Servicio listo para usar!!!');
  }

}

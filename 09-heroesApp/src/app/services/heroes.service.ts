import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private url = 'https://heroesapp-50003-default-rtdb.firebaseio.com';
  constructor(private http: HttpClient) {}
  crearHeroe(heroe: HeroeModel) {
    return this.http.post(`${this.url}/heroes.json`, heroe).pipe(
      map((resp: any) => {
        heroe.id = resp.name;
        return heroe;
      })
    );
  }
  actualizarHeroe(heroe: HeroeModel) {
    const heroeTemp = {
      ...heroe,
    };
    delete heroeTemp.id;
    return this.http.put(`${this.url}/heroes/${heroe.id}.json`, heroeTemp);
  }
  getHeroes() {
    return this.http
      .get(`${this.url}/heroes.json`)
      .pipe(map(this.crearArreglo));
  }
  crearArreglo(heroesObj: any) {
    let heroes: HeroeModel[] = [];
    console.log({heroesObj});
    Object.keys(heroesObj).forEach((key) => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.id = key;
      console.log({heroe});
      heroes.push(heroe);
    });
    if (heroes === null) {
      heroes = [];
    }
    console.log({heroes});
    return heroes;
  }
  getHeroe(id:string)
  {
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  borrarHeroe(id:string)
  {
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }
}

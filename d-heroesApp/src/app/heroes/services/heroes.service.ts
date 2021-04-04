import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroe[]> {
    return this.http
      .get<Heroe[]>(`${environment.baseUrl}/heroes`);
  }
  getHeroe(id: string): Observable<Heroe> {
    return this.http
      .get<Heroe>(`${environment.baseUrl}/heroes/${id}`);
  }
  buscarHeroe(termino: string): Observable<Heroe[]> {
    return this.http
      .get<Heroe[]>(`${environment.baseUrl}/heroes?q=${termino}&_limit=6`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/interfaces.interface';
@Injectable({
  providedIn: 'root',
})
export class PaisService {
  urlBase = 'https://restcountries.eu/rest/v2';
  constructor(private http: HttpClient) {}
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.urlBase}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.urlBase}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }
  buscarCodigo(id: string): Observable<Country> {
    const url = `${this.urlBase}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
  buscarRegion(id: string): Observable<Country[]> {
    const url = `${this.urlBase}/region/${id}`;
    return this.http.get<Country[]>(url);
  }
}

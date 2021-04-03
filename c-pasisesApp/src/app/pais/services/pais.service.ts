import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../interfaces/interfaces.interface';
@Injectable({
  providedIn: 'root',
})
export class PaisService {
  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name;capital;alpha2Code;flag;population'
    );
  }
  urlBase = 'https://restcountries.eu/rest/v2';
  constructor(private http: HttpClient) {}
  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.urlBase}/name/${termino}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.urlBase}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
  buscarCodigo(id: string): Observable<Country> {
    const url = `${this.urlBase}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
  buscarRegion(id: string): Observable<Country[]> {
    const url = `${this.urlBase}/region/${id}`;
    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(tap(console.log));
  }
}

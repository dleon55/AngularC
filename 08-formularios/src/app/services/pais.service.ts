import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(public http: HttpClient) {}
  // tslint:disable-next-line: typedef
  getPaises() {
    return this.http.get('https://restcountries.eu/rest/v2/lang/es');
  }
}

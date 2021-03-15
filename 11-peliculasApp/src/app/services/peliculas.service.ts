import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { getCartelera } from '../operations/query';
import { map } from 'rxjs/operators';
import { CarteleraResponse } from '../interfaces/cartelera-response';
import { EmptyObject } from 'apollo-angular/types';
@Injectable({
  providedIn: 'root',
})
export class PeliculasService {
  constructor(private http: HttpClient, private apollo: Apollo) {}
  getCartelera(): any {
    return this.apollo
      .watchQuery({
        query: getCartelera,
        fetchPolicy: 'network-only',
      })
      .valueChanges.pipe(
        map((result: any) => {
          return result.data.getCartelera;
        })
      );
  }
}

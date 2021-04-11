import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map,delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private http: HttpClient) {}
  getDataDonaRedesSociales() {
    return this.http.get('http://localhost:3000/grafica');
  }
  getUsuariosRdDonaDta() {
    return this.getDataDonaRedesSociales().pipe(
      delay(1500),
      map((data) => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        return { labels, values };
      })
    );
  }
}

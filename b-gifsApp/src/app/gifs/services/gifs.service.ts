import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGiftResponse, Gif } from '../../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey = 't4T2xb2ekiEKumzHJ8u5NqVTHVzOlukj';
  private servicioUrl:string='https://api.giphy.com/v1/gifs';
  private miHistorial: string[] = [];
  private limit = 20;
  public resultados: Gif[] = [];
  constructor(private http: HttpClient) {
    this.miHistorial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }
  get historial(): string[] {
    return [...this.miHistorial];
  }
  buscarGisf(query: string): void {
    query = query.trim().toLowerCase();
    if (!this.miHistorial.includes(query)) {
      this.miHistorial.unshift(query);
      this.miHistorial = this.miHistorial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this.miHistorial));
    }
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', this.limit.toString())
      .set('q', query);
    console.log(params.toString());
    this.http
      .get<SearchGiftResponse>(
        `${this.servicioUrl}/search`, {params}
      )
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}

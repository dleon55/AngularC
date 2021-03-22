import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey:string='t4T2xb2ekiEKumzHJ8u5NqVTHVzOlukj';
  private _historial: string[] = [];
  public resultados: any[]=[];
  constructor(private http:HttpClient) { }
  get historial() {
    return [...this._historial];
  }
  buscarGisf(query: string) {
    query=query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=15`)
    .subscribe((resp:any)=>{
      this.resultados=resp.data;
      console.log(this.resultados);
    })

    
  }
}

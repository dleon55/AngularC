import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log();
  }
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        "Bearer " +
        `BQDrUrdITqjPx7Fj0CWhVcOsJA1scjOEGKjUT5AlHyXhVhcXYtZnTfDMDE5-6bs4EZkhprOSHvUzbSIRysc`,
    });
    return this.http.get(url, { headers });
  }
  getNewReleases() {
    return this.getQuery(`browse/new-releases`).pipe(
      map((data: any) => {
        return data.albums.items;
      })
    );
  }
  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=40`).pipe(
      map((data: any) => {
        return data.artists.items;
      })
    );
  }
}

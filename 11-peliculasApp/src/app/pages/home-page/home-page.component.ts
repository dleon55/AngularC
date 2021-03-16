import { Component, HostListener, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { CarteleraResponse, Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    console.log({ pos, max });
    if (pos > max) {
      console.log('llamar el servicio');
      this.peliculasService
        .getCartelera(1)
        .subscribe((resp: CarteleraResponse) => {
          // console.log({ resp });
          this.movies.push(...resp.results);
        });
    }
  }
  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.peliculasService
      .getCartelera(1)
      .subscribe((resp: CarteleraResponse) => {
        // console.log({ resp });
        this.movies = resp.results;
        this.moviesSlideshow = resp.results;
      });
  }
}

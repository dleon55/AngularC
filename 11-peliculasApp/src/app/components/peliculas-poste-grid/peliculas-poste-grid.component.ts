import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poste-grid',
  templateUrl: './peliculas-poste-grid.component.html',
  styleUrls: ['./peliculas-poste-grid.component.scss'],
})
export class PeliculasPosteGridComponent implements OnInit {
  @Input()
  movies: Movie[] = [];
  slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  constructor() {}

  ngOnInit(): void {
    console.log(this.movies);
  }
  onRate(event: any) {
    console.log(event);
  }
}

import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-slideshow',
  template: `
    <swiper
      [slidesPerView]="3"
      [spaceBetween]="50"
      (swiper)="onSwiper($event)"
      (slideChange)="onSlideChange()"
      [navigation]="true"
      [pagination]="{ clickable: true }"
      [scrollbar]="{ draggable: true }"
      [loop]="true"
    >
      <ng-template  *ngFor="let movie of movies; index as i" swiperSlide
        ><div class="card" style="width: 18rem;">
          <img
            src="https://image.tmdb.org/t/p/w500{{ movie.backdrop_path }}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body movie-description">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.overview | slice: 0:130 }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div></ng-template
      >
    </swiper>
    <!-- <div [ngStyle]="{
            'background-size': '100%',
            'background-image':
              'url(https://image.tmdb.org/t/p/w500/hJuDvwzS0SPlsE6MNFOpznQltDZ.jpg)'
          }" class="card" style="width: 18rem;">
      <img src="https://image.tmdb.org/t/p/w500{{ movie.backdrop_path }}"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body movie-description">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">{{ movie.overview | slice: 0:130 }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> -->
  `,
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input()
  movies: Movie[] = [];
  slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );
  constructor() {}
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    console.log(this.movies);
  }
  onSwiper(swiper: any): void {
    console.log({ swiper });
  }
  onSlideChange(): void {
    console.log('slide change');
  }
}

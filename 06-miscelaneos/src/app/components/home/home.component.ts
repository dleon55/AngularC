import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>

    <app-css></app-css>

    <app-clases></app-clases>

    <p [appResaltado]="'red'">Hola mundo..</p>

    <app-ng-switch></app-ng-switch>

    <mat-slider min="1" max="100" step="1" value="1"></mat-slider>

    <i class="fas fa-pencil-alt"></i>
  `,
  styles: [],
})
// OnChanges,
export class HomeComponent
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    DoCheck,
    AfterViewChecked {
  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('onInit');
  }
  // ngOnChanges(): void {
  //   console.log('onChanges');
  // }
  ngDoCheck(): void {
    console.log('doCheck');
  }
  ngAfterContentInit(): void {
    console.log('afterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
}

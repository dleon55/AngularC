import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
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
  `,
  styles: [],
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('onInit');
  }
  ngOnChanges(): void {
    console.log('onChanges');
  }
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
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
}

import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]',
})
export class ErrorMsgDirective implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log('on init');
  }
}

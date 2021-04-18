import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appErrorMsg]',
})
export class ErrorMsgDirective implements OnInit, OnChanges {
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';
  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor: string) {
    this._color=valor;
    this.setColor();
  }
  @Input() set mensaje(valor: string) {
    this._mensaje = valor;
    this.setMensaje;
    this.htmlElement.nativeElement.innerText = valor;
  }
  // @Input()  mensaje: string = 'Este campo es requerido';
  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.mensaje) {
      const mensaje = changes.mensaje.currentValue;
      this.htmlElement.nativeElement.innerText = mensaje;
      console.log(mensaje);
    }
    if (changes.color) {
      const color = changes.mensaje.currentValue;
      this.htmlElement.nativeElement.style.color = color;
      console.log(color);
    }
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('on init de directiva');
    this.setColor();
    this.setMensaje();
    this.setEstilo();

  }
  setEstilo() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }
  setColor(): void {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.htmlElement.nativeElement.style.color = color;
  }
  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}

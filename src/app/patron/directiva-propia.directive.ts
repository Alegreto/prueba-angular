import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirectivaPropia]'
})
export class DirectivaPropiaDirective {

  constructor() { }

  @HostBinding('class.color') private cambio:boolean = false;
  @HostListener('mouseover') onOver() {
    this.cambio = true;
  }
  @HostListener('mouseout') onOut() {
    this.cambio = false;
  }

}

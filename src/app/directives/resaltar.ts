import { Directive, ElementRef, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class Resaltar {

  private readonly el = inject(ElementRef<HTMLElement>);

  readonly appResaltar = input<string>('#fef08a');

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appResaltar();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

}

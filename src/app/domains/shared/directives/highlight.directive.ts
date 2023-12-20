import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {
//para hacer manipulación directa de un dom
//si se desea manipular un elemento

  element = inject(ElementRef);
  constructor() { }
  ngOnInit(){
    this.element.nativeElement.style.backgroundColor= "red";

  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  //img = 'https://picsum.photos/640/640?r'+Math.random()
  @Input({required:true}) img:string='';
  @Input() price:number=0;
  @Input() title:string='';

  @Output() addToCard= new EventEmitter();

  addtoCartHandler(){
    console.log("Click from child");
    this.addToCard.emit('Hola este es un msg desde el hijo '+this.title);
  }
}

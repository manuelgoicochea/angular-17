import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';
import{CommonModule} from '@angular/common';
import { ReversePipe } from "@shared/pipes/reverse.pipe";

import { TimeAgoPipe } from "@shared/pipes/time-ago.pipe";

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [CommonModule, ReversePipe,TimeAgoPipe]
})
export class ProductComponent {
  //img = 'https://picsum.photos/640/640?r'+Math.random()
  @Input({required:true}) product!:Product;

  @Output() addToCard= new EventEmitter();

  addtoCartHandler(){
    this.addToCard.emit(this.product);
  }
}

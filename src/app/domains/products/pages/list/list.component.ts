import { Component, Inject, inject, signal } from '@angular/core';
import{CommonModule} from '@angular/common';
import{ProductComponent} from '@products/components/product/product.component';
import{HeaderComponent} from '@shared/components/header/header.component';// utilizando alias de tsconfig.json
import{Product} from '@shared/models/product.model';
import { from } from 'rxjs';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ProductComponent,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  products = signal<Product[]>([]);
  //cart = signal<Product[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);



  ngOnInit(){
    this.productService.getProducts()
    .subscribe({
      next:(products)=>{
        this.products.set(products);
      },
      error:()=>{

      }
    })
  }
 

  /*el padre necesita escuchar  por eso se crea el metodo from child*/
  addToCart(product:Product){
    
    //this.cart.update(prevState=>[...prevState,product]);
    this.cartService.addToCart(product)

  }

}

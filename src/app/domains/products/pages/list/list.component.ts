import { Component, Inject, Input, SimpleChanges, inject, signal } from '@angular/core';

import{RouterLinkWithHref} from '@angular/router';

import{ProductComponent} from '@products/components/product/product.component';
import{HeaderComponent} from '@shared/components/header/header.component';// utilizando alias de tsconfig.json
import{Product} from '@shared/models/product.model';
import { from } from 'rxjs';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.model';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {


  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  //cart = signal<Product[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id?:string;


  ngOnInit(){
   this.getCategories();

  }

  ngOnChanges(changes:SimpleChanges){//mapeando cambios
    //const category_id = changes['category_id'];
    //if (category_id) {
      this.getProducts();
    //}
  }
 

  /*el padre necesita escuchar  por eso se crea el metodo from child*/
  addToCart(product:Product){    
    //this.cart.update(prevState=>[...prevState,product]);
    this.cartService.addToCart(product)
  }

  private getProducts(){
    this.productService.getProducts(this.category_id)
    .subscribe({
      next:(products)=>{
        this.products.set(products);
      },
      error:()=>{

      }
    })
  }

  private getCategories(){
    this.categoryService.getAll()
    .subscribe({
      next:(data)=>{
        this.categories.set(data);
      },
      error:()=>{

      }
    })
  }

}

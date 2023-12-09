import { Component } from '@angular/core';
import{ProductComponent} from './../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  /*el padre necesita escuchar  por eso se crea el metodo from child*/
  fromChild($event:string){
    console.log('estamos en el padre');
    console.log($event);

  }

}

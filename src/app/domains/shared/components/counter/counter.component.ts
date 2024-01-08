import { Component, Input, SimpleChanges, signal } from '@angular/core';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  //cuando no especificamos el tipo de variable estamos utilizando el motor de inferencia de typescript
  @Input({required:true}) duration= 0;
  @Input({required:true}) message = '';
  counter = signal(0);//ejem memory leaks
  counterRef:number|undefined;

  constructor(){
    //no async
    //se corre antes de renderizar el componente 
    // before render
    console.log('constructor');
    console.log('-'.repeat(10));
  }
  ngOnChanges(changes:SimpleChanges){
    //before andd during render
    //se puede ver que cambio y que cosas estan cambiando
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration=changes['duration'];//si se esta cambiando la duracion
    console.log(duration);
    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomething();
    }
  }

  ngOnInit(){
    //after render 
    //solo corre una vez
    //async,then,subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>',this.duration);
    console.log('message=>',this.message);
    //memory leaks
    this.counterRef = window.setInterval(()=>{
      console.log('run interval');
      this.counter.update(statePrev=>statePrev+1);
    },1000)//1s
//la tarea sigue corriendo pese a que se destruya el objeto

  }

  ngAfterViewInit(){
    //after render
    //para saber si los hijos fueron renderizados 
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));

  }
  ngOnDestroy(){ 
    //cuando el componente se destruye
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);// eliminamos el intervalo para que no genere memory leaks


  }
  doSomething(){
    console.log('change duration');
    //async
  }


}

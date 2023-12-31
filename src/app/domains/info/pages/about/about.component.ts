import { Component, signal } from '@angular/core';

import{CounterComponent} from '@shared/components/counter/counter.component';
import{HighlightDirective} from '@shared/directives/highlight.directive';
import{WaveAudioComponent} from '@info/components/wave-audio/wave-audio.component';
import { HeaderComponent } from "@shared/components/header/header.component";


@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [CounterComponent, HighlightDirective, WaveAudioComponent, HeaderComponent]
})
export default class AboutComponent {
  //signals
  duration = signal(1000);
  message=signal('hola');

  changeDuration(event:Event){
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber)
  }
  changeMessage(event:Event){
    const input = event.target as HTMLInputElement;
    this.message.set(input.value)
  }

}

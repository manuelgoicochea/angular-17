import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {

  @Input({required:true}) audioUrl!: string;// la exclamación es para que no te alerte la inicialización
  @ViewChild('wave') container!:ElementRef;

  ngAfterViewInit(){
    /*after render
    para saber si los hijos fueron renderizados 
    es usual que llamemos a las librerias en este evento pues estamos verificando el llamado luego de haber 
    creado el objeto */
    WaveSurfer.create({
      url:this.audioUrl,
      //container:document.getElementById('#c');//forma de llamar en js
      container:this.container.nativeElement
    })

  }
}

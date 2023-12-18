import { Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import{CommonModule}from '@angular/common';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {

  @Input({required:true}) audioUrl!: string;// la exclamación es para que no te alerte la inicialización
  @ViewChild('wave') container!:ElementRef;
  private ws!:WaveSurfer;
  isPlaying = signal(false);

  ngAfterViewInit(){
    /*after render
    para saber si los hijos fueron renderizados 
    es usual que llamemos a las librerias en este evento pues estamos verificando el llamado luego de haber 
    creado el objeto */
    this.ws = WaveSurfer.create({
      url:this.audioUrl,
      container:this.container.nativeElement
    });
    this.ws.on('play',()=>this.isPlaying.set(true));    
    this.ws.on('pause',()=>this.isPlaying.set(false));

  }

  playPause(){
    this.ws.playPause();
  }
}

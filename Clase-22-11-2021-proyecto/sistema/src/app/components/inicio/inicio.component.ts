import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  @ViewChild('cuadro') cuadroHTML?: ElementRef;
  @ViewChild('natilla') natillaHTML?: ElementRef;

  constructor( private renderer2: Renderer2 ) { }

  ngOnInit(): void {
    console.log("Hola papa noel")
  }

  cambio_cuadro(){
    const elementoHTML = this.cuadroHTML?.nativeElement;
    console.log(elementoHTML);
    // elementoHTML.style.border = 'solid 2px red';
    this.renderer2.setStyle(elementoHTML, 'border', 'solid 2px red');
    this.renderer2.setStyle(elementoHTML, 'background-color', '#26ff09');
  }

  cambio_imagen(){
    const navidadHTML = this.natillaHTML?.nativeElement;
    this.renderer2.setAttribute(navidadHTML, 'src', 'https://mandolina.co/wp-content/uploads/2020/11/natilla-con-salsa-de-mora.jpg');
  }

}

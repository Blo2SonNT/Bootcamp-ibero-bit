import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SmoothScrollService, ISmoothScrollOption } from '@boatzako/ngx-smooth-scroll';

@Component({
  selector: 'app-hoja',
  templateUrl: './hoja.component.html',
  styleUrls: ['./hoja.component.css']
})
export class HojaComponent implements OnInit {

  constructor(private smooth: SmoothScrollService) { }

  @ViewChild("boxa") boxa!: ElementRef;
  @ViewChild("boxb") boxb!: ElementRef;
  @ViewChild("secA") secA!: ElementRef;
  @ViewChild("secB") secB!: ElementRef;
  @ViewChild("secC") secC!: ElementRef;

  ngOnInit(): void {
    this.smooth.smoothScrollToAnchor();
  }

  goTop() {
    let opt: ISmoothScrollOption = { duration: 500, easing: "linear" };
    this.smooth.smoothScrollToTop(opt);
  }

  

}

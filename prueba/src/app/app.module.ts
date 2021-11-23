import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HojaComponent } from './components/hoja/hoja.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { NgxSmoothScrollModule } from '@boatzako/ngx-smooth-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HojaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSmoothScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HojaComponent } from './components/hoja/hoja.component';

const routes: Routes = [
  { path: '', component: HojaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

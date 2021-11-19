import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HojaDeVidaComponent } from './components/hoja-de-vida/hoja-de-vida.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
	{ path: '', component: ContactoComponent },
	{ path: 'curriculum', component: HojaDeVidaComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistroInventarioComponent } from './components/registro-inventario/registro-inventario.component';

const routes: Routes = [
	{ path: '', component: InicioComponent},
	{ path: 'admin', component: DashboardComponent },
	{ path: 'crear-inventario', component: RegistroInventarioComponent },
	{ path: 'editar-inventario/:id', component: RegistroInventarioComponent },
	{ path: '404', component: NotFoundComponent },
	{ path: '**', redirectTo: '404', pathMatch: 'full' }

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

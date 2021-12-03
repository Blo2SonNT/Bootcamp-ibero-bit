import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	listarProductos: Producto[] = [];

	constructor(private _productoService: ProductoService) { }

	ngOnInit(): void {
		this.obtenerProductos();
	}

	obtenerProductos() {
		this._productoService.getProductos().subscribe(data => {
			console.log(data)
			this.listarProductos = data;
		}, error => {
			console.log(error);
		}
		)
	}

	eliminarProducto(id: any) {
		Swal.fire({
			title: 'Seguro desea eliminar el producto?',
			text: "Esta accion no sera reversible",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Si, eliminar!'
		}).then((result) => {
			if (result.isConfirmed) {
				this._productoService.deleteProducto(id).subscribe( data => {
					Swal.fire({
						icon: 'success',
  						title: 'Producto eliminado',
					})
					this.obtenerProductos();
				}, error => {
					console.log(error)
				})
			}
		})
	}

}

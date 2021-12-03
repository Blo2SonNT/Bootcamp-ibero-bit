import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
	selector: 'app-registro-inventario',
	templateUrl: './registro-inventario.component.html',
	styleUrls: ['./registro-inventario.component.css']
})
export class RegistroInventarioComponent implements OnInit {

	inventarioForm: FormGroup;
	valorNumerico = /^[0-9]+$/;
	titulo_formulario = 'Registro producto';
	id: string | null;

	constructor(private fb: FormBuilder, private router: Router, private _productoService: ProductoService, private idRuta: ActivatedRoute) {
		this.inventarioForm = this.fb.group({
			nombreProducto: ['', Validators.required],
			fecVenceProducto: ['', Validators.required],
			precioProducto: ['', [Validators.required, Validators.pattern(this.valorNumerico)]],
			cantidadProducto: ['', [Validators.required, Validators.pattern(this.valorNumerico)]],
			proveedorProducto: ['', Validators.required]
		});
		this.id = this.idRuta.snapshot.paramMap.get('id');
	}

	ngOnInit(): void {
		this.accionFormulario();
	}

	guardarInventario(){
		console.log(this.inventarioForm);

		const PRODUCTO: Producto = {
			nombre: this.inventarioForm.get('nombreProducto')?.value,
			fec_vencimiento: this.inventarioForm.get('fecVenceProducto')?.value,
			precio: this.inventarioForm.get('precioProducto')?.value,
			cantidad: this.inventarioForm.get('cantidadProducto')?.value,
			proveedor: this.inventarioForm.get('proveedorProducto')?.value,
		}

		console.log(PRODUCTO)
		
		if(this.id == null){
			this._productoService.postProducto(PRODUCTO).subscribe( data => {
				this.router.navigate(['/admin'])
				Swal.fire({
					icon: 'success',
					title: 'Registro exitoso',
					text: 'El producto quedo dentro del inventario'
				})
			})
		}else{
			this._productoService.putProducto(this.id, PRODUCTO).subscribe( data => {
				this.router.navigate(['/admin'])
				Swal.fire({
					icon: 'success',
					title: 'Actualizacion exitoso',
					text: 'El producto quedo modificado en el inventario'
				})
			})
		}

		

	}

	accionFormulario(){
		if(this.id !== null){
			this.titulo_formulario = "Actualizacion del producto";
			this._productoService.getProducto(this.id).subscribe(data =>{
				this.inventarioForm.setValue({
					nombreProducto: data.nombre,
					fecVenceProducto: data.fec_vencimiento,
					precioProducto: data.precio,
					cantidadProducto: data.cantidad,
					proveedorProducto: data.proveedor,
				})
			})
		}
	}

}

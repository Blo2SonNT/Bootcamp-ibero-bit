import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-registro-inventario',
	templateUrl: './registro-inventario.component.html',
	styleUrls: ['./registro-inventario.component.css']
})
export class RegistroInventarioComponent implements OnInit {

	inventarioForm: FormGroup;
	valorNumerico = /^[0-9]+$/;

	constructor(private fb: FormBuilder, private router: Router) {
		this.inventarioForm = this.fb.group({
			nombreProducto: ['', Validators.required],
			fecVenceProducto: ['', Validators.required],
			precioProducto: ['', [Validators.required, Validators.pattern(this.valorNumerico)]],
			cantidadProducto: ['', [Validators.required, Validators.pattern(this.valorNumerico)]],
			proveedorProducto: ['', Validators.required]
		})
	}

	ngOnInit(): void {
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
		this.router.navigate(['/admin'])
		Swal.fire({
			icon: 'success',
			title: 'Registro exitoso',
			text: 'El producto quedo dentro del inventario'
		})

		

	}

}

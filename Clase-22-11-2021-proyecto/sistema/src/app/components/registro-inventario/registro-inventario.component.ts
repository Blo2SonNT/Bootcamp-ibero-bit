import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-registro-inventario',
	templateUrl: './registro-inventario.component.html',
	styleUrls: ['./registro-inventario.component.css']
})
export class RegistroInventarioComponent implements OnInit {

	inventarioForm: FormGroup;
	valorNumerico = /^[0-9]+$/;

	constructor(private fb: FormBuilder) {
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
	}

}

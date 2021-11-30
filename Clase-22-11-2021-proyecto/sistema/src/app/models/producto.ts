export class Producto{
    _id?: string;
    nombre: string;
    fec_vencimiento: string;
    precio: number;
    cantidad: number;
    proveedor: string;

    constructor(nombre: string, fec_vencimiento: string, precio: number, cantidad: number, proveedor: string ){
        this.nombre = nombre;
        this.fec_vencimiento = fec_vencimiento;
        this.precio = precio;
        this.cantidad = cantidad;
        this.proveedor = proveedor;
    }
}
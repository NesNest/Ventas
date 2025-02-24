export class Articulo {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;

  constructor(id: number, nombre: string, descripcion: string, precio: number, stock: number) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
  }
}

export class Articulo {
  articulo_id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;

  constructor(articulo_id: number, nombre: string, descripcion: string, precio: number, stock: number) {
    this.articulo_id = articulo_id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
  }
}

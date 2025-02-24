export class Tienda {
  tienda_id: number;
  nombre: string;
  direccion: string;
  constructor(tienda_id: number, nombre: string, direccion: string ) {
    this.tienda_id = tienda_id;
    this.nombre = nombre;
    this.direccion = direccion;
  }
}

export class Clientes {
  cliente_id: number;
  nombre: string;
  apellido: string;
  direccion: string;

  constructor(cliente_id: number, nombre: string, apellido: string, direccion: string) {
    this.cliente_id = cliente_id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
  }
}


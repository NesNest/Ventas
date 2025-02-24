export class Clientes {
  id: number;
  nombre: string;
  apellido: string;
  direccion: string;

  constructor(id: number, nombre: string, apellido: string, direccion: string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
  }
}


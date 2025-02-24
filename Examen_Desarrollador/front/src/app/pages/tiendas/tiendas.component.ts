import { Component, OnInit } from '@angular/core';
import { TiendaService } from './../../services/entitiesServices/tienda.service';
import { Tienda } from '../../models/entitiesModels/tienda/tienda.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tiendas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {
  tiendas: Tienda[] = [];

  constructor(private tiendaService: TiendaService) { }

  ngOnInit(): void {
    this.loadTiendas();
  }

  loadTiendas(): void {
    this.tiendaService.getTiendas().subscribe((data: Tienda[]) => {
      this.tiendas = data;
    });
  }

  addTienda(tienda: Tienda): void {
    this.tiendaService.createTienda(tienda).subscribe(() => {
      this.loadTiendas();
    });
  }
  updateTienda(tienda_id: number, tienda: Tienda) {
    const updatedTienda = { ...tienda };
    updatedTienda.nombre = prompt("Nuevo nombre:", tienda.nombre) || tienda.nombre;
    updatedTienda.direccion = prompt("Nueva dirección:", tienda.direccion) || tienda.direccion;
    this.tiendaService.updateTienda(tienda_id, updatedTienda).subscribe(data => {
      this.loadTiendas();
    });
  }

  deleteTienda(id: number): void {
    this.tiendaService.deleteTienda(id).subscribe(() => {
      this.loadTiendas();
    });
  }
}

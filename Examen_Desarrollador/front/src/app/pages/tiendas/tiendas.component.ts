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

  updateTienda(id: number, tienda: Tienda): void {
    this.tiendaService.updateTienda(id, tienda).subscribe(() => {
      this.loadTiendas();
    });
  }

  deleteTienda(id: number): void {
    this.tiendaService.deleteTienda(id).subscribe(() => {
      this.loadTiendas();
    });
  }
}

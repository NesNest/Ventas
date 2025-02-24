
import { Component, OnInit } from '@angular/core';
import { ArticuloService } from './../../services/entitiesServices/articulo.service';
import { Articulo } from '../../models/entitiesModels/articulo/articulo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  articulos: Articulo[] = [];

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.loadArticulos();
  }

  loadArticulos(): void {
    this.articuloService.getArticulos().subscribe((data: Articulo[]) => {
      this.articulos = data;
    });
  }

  addArticulo(articulo: Articulo): void {
    this.articuloService.createArticulo(articulo).subscribe(() => {
      this.loadArticulos();
    });
  }
  updateArticulo(articulo_id: number, articulo: Articulo) {
    const updatedArticulo = { ...articulo };
    updatedArticulo.nombre = prompt("Nuevo nombre:", articulo.nombre) || articulo.nombre;
    updatedArticulo.descripcion = prompt("Nueva dirección:", articulo.descripcion) || articulo.descripcion;

    const nuevoPrecio = prompt("Nuevo precio:", articulo.precio.toString());
    updatedArticulo.precio = nuevoPrecio ? parseFloat(nuevoPrecio) : articulo.precio;
    const nuevoStock = prompt("Nuevo stock:", articulo.stock.toString());
    updatedArticulo.stock = nuevoStock ? parseInt(nuevoStock, 10) : articulo.stock;

    this.articuloService.updateArticulo(articulo_id, updatedArticulo).subscribe(data => {
    this.loadArticulos();
  });
}



  deleteArticulo(id: number): void {
    this.articuloService.deleteArticulo(id).subscribe(() => {
      this.loadArticulos();
    });
  }
}

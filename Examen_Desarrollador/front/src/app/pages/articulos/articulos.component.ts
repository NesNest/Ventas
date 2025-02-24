
import { Component, Injectable, OnInit } from '@angular/core';
import { ArticuloService } from './../../services/entitiesServices/articulo.service';
import { Articulo } from '../../models/entitiesModels/articulo/articulo.model';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
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

  updateArticulo(id: number, articulo: Articulo): void {
    this.articuloService.updateArticulo(id, articulo).subscribe(() => {
      this.loadArticulos();
    });
  }

  deleteArticulo(id: number): void {
    this.articuloService.deleteArticulo(id).subscribe(() => {
      this.loadArticulos();
    });
  }
}

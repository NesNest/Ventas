import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/entitiesServices/cliente.service';
import { Clientes } from '../../models/entitiesModels/cliente/cliente.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Clientes[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes(): void {
    this.clienteService.getClientes().pipe(
      catchError(error => {
        console.error('Error al cargar clientes', error);
        return of([]);
      })
    ).subscribe((data: Clientes[]) => {
      this.clientes = data;
    });
  }

  addCliente(cliente: Clientes): void {
    this.clienteService.createCliente(cliente).pipe(
      catchError(error => {
        console.error('Error al agregar cliente', error);
        return of(null);
      })
    ).subscribe(() => {
      this.loadClientes();
    });
  }

  updateCliente(cliente_id: number, cliente: Clientes): void {
    this.clienteService.updateCliente(cliente_id, cliente).pipe(
      catchError(error => {
        console.error('Error al actualizar cliente', error);
        return of(null);
      })
    ).subscribe(() => {
      this.loadClientes();
    });
  }

  deleteCliente(cliente_id: number): void {
    this.clienteService.deleteCliente(cliente_id).pipe(
      catchError(error => {
        console.error('Error al eliminar cliente', error);
        return of(null);
      })
    ).subscribe(() => {
      this.loadClientes();
    });
  }
}

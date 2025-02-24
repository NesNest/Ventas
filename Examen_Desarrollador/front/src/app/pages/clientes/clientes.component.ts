import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/entitiesServices/cliente.service';
import { Clientes } from '../../models/entitiesModels/cliente/cliente.model';

@Component({
  selector: 'app-clientes',
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
    this.clienteService.getClientes().subscribe((data: Clientes[]) => {
      this.clientes = data;
    });
  }

  addCliente(cliente: Clientes): void {
    this.clienteService.createCliente(cliente).subscribe(() => {
      this.loadClientes();
    });
  }

  updateCliente(id: number, cliente: Clientes): void {
    this.clienteService.updateCliente(id, cliente).subscribe(() => {
      this.loadClientes();
    });
  }

  deleteCliente(id: number): void {
    this.clienteService.deleteCliente(id).subscribe(() => {
      this.loadClientes();
    });
  }
}


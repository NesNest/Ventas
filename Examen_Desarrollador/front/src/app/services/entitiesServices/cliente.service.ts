import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Clientes } from '../../models/entitiesModels/cliente/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private URLbase = environment.apiURL + 'api/Clientes';

  constructor(private http: HttpClient) { }

  public getClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.URLbase);
  }

  public createCliente(cliente: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(this.URLbase, cliente);
  }

  public updateCliente(id: number, cliente: Clientes): Observable<void> {
    return this.http.put<void>(`${this.URLbase}/${id}`, cliente);
  }

  public deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URLbase}/${id}`);
  }
}

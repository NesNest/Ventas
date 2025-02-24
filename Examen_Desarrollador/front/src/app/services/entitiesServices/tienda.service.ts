import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { Tienda } from '../../models/entitiesModels/tienda/tienda.model';


@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private URLbase = environment.apiURL + 'api/Tiendas';

  constructor(private http: HttpClient) { }

  public getTiendas(): Observable<Tienda[]> {
    return this.http.get<Tienda[]>(this.URLbase);
  }

  public getTienda(id: number): Observable<Tienda> {
    return this.http.get<Tienda>(`${this.URLbase}/${id}`);
  }

  public createTienda(tienda: Tienda): Observable<Tienda> {
    return this.http.post<Tienda>(this.URLbase, tienda);
  }

  public updateTienda(id: number, tienda: Tienda): Observable<void> {
    return this.http.put<void>(`${this.URLbase}/${id}`, tienda);
  }

  public deleteTienda(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URLbase}/${id}`);
  }
}
  ;

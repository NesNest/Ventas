import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Articulo } from '../../models/entitiesModels/articulo/articulo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  private URLbase = environment.apiURL + 'api/Articulos';

  constructor(private http: HttpClient) { }

  public getArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.URLbase);
  }

  public getArticulo(id: number): Observable<Articulo> {
    return this.http.get<Articulo>(`${this.URLbase}/${id}`);
  }

  public createArticulo(articulo: Articulo): Observable<Articulo> {
    return this.http.post<Articulo>(this.URLbase, articulo);
  }

  public updateArticulo(id: number, articulo: Articulo): Observable<void> {
    return this.http.put<void>(`${this.URLbase}/${id}`, articulo);
  }

  public deleteArticulo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.URLbase}/${id}`);
  }
}

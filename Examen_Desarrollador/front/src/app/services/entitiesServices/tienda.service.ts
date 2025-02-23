import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';  
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private URLbase = environment.apiURL + 'api/Tiendas';

  constructor(private http: HttpClient) { }  
  //  Define el tipo de retorno correctamente
  public getTiendas(): Observable<any[]> {

    return this.http.get<any[]>(this.URLbase);
  }
}

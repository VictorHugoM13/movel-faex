import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  baseUrl = 'http://localhost:3000';

  constructor(private HttpCLient: HttpClient) { }

  public getUsuarios() : Observable<Usuario[]>{
    return this.HttpCLient.get<Usuario[]>(this.baseUrl+'/usuario');
  }
}

import { Curso } from './curso.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  baseUrl = 'http://localhost:3000';

  constructor(private HttpCLient: HttpClient) {}

  public getCursos() : Observable<Curso[]>{
    return this.HttpCLient.get<Curso[]>(this.baseUrl+'/cursos');
  }

  public getCurso(id: string) : Observable<Curso>{
    const url = `${this.baseUrl}/cursos/${id}`;
    return this.HttpCLient.get<Curso>(url);
  }
}

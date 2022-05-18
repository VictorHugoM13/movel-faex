import { Disciplina } from './disciplina.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  baseUrl = 'http://localhost:3000';
  /*
  public disciplinas : Array<Disciplina> = [
    new Disciplina('Análise e Desenvolvimento de Sisteeeeemas', 30, 25),
    new Disciplina('Banco de dados', 50, 30),
    new Disciplina('Engenharia de Software', 40, 35),
  ]*/
  constructor(private HttpCLient: HttpClient) { }

  public getDisciplinas() : Observable<Disciplina[]>{
    return this.HttpCLient.get<Disciplina[]>(this.baseUrl+'/disciplinas');
  }
}

import { Observable } from 'rxjs';
import { Aluno } from './alunos.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  baseUrl = 'http://localhost:3000';
/*
  *public alunos: Array <Aluno> = [ 
    { ra: 10735, nome: 'Victor', senha: '1234' },
    { ra: 12243, nome: 'Lucas', senha: '4321' }
  ]*/

  constructor(private HttpCLient: HttpClient) { }

  public getAlunos() : Observable<Aluno[]>{
    return this.HttpCLient.get<Aluno[]>(this.baseUrl+'/alunos');
  }
  
  public getAluno(id: string) : Observable<Aluno>{
    const url = `${this.baseUrl}/alunos/${id}`;
    return this.HttpCLient.get<Aluno>(url);
  }
}

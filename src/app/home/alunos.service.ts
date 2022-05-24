import { Token } from './tokens.model';
import { Observable } from 'rxjs';
import { Aluno } from './alunos.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

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

  constructor(private HttpCLient: HttpClient, private storage : Storage) {
    this.init();
   }

  private async init() {
    this.storage = await this.storage.create();
  }

  public async getSession() {
    return await this.storage.get('session').then((id : string) => {
      return Promise.resolve(id);
    });
  }

  public async setSession(id: string) {
    this.storage.set('session', id);
  }

  public getAlunos() : Observable<Aluno[]>{
    return this.HttpCLient.get<Aluno[]>(this.baseUrl+'/alunos');
  }
  
  public getAluno(id: string) : Observable<Aluno>{
    const url = `${this.baseUrl}/alunos/${id}`;
    return this.HttpCLient.get<Aluno>(url);
  }

  public getToken(id : string) : Observable<Token>{
    const url = `${this.baseUrl}/tokens/${id}`;
    return this.HttpCLient.get<Token>(url);
  }

  public setAluno(id : string, aluno : Aluno) : Observable<Aluno>{
    const url = `${this.baseUrl}/alunos/${id}`;
    return this.HttpCLient.put<Aluno>(url, aluno);
  }     

}


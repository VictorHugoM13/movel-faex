import { Aluno } from './alunos.model';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  public alunos: Array <Aluno> = [ 
    { ra: 10735, nome: 'Victor', senha: '1234' },
    { ra: 12243, nome: 'Lucas', senha: '4321' }
  ]

  constructor() { }

  public getAlunos() {
    return this.alunos;
  }
}

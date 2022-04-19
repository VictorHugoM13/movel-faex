import { Disciplina } from './disciplina.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  public disciplinas : Array<Disciplina> = [
    new Disciplina('Análise e Desenvolvimento de Sisteeeeemas', 30, 25),
    new Disciplina('Banco de dados', 50, 30),
    new Disciplina('Engenharia de Software', 40, 35),
  ]
  constructor() { }

  public getDisciplina() {
    return this.disciplinas;
  }
}

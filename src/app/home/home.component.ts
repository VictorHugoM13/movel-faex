import { Component, OnInit } from '@angular/core';
import { Disciplina } from './disciplina.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public disciplinas : Array<Disciplina> = [
    new Disciplina('Análise e Desenvolvimento de Sistemas', 30, 25),
    new Disciplina('Banco de dados', 50, 30),
    new Disciplina('Engenharia de Software', 40, 35),
  ]

  constructor() { }

  ngOnInit() {}

}

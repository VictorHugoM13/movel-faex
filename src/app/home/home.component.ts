import { Component, OnInit } from '@angular/core';
import { Disciplina } from './disciplina.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public disciplinas : Array<Disciplina> = [
    new Disciplina('Análise e Desenvolvimento de Sistemas'),
    new Disciplina('Banco de dados'),
    new Disciplina('Engenharia de Software')
  ]

  constructor() { }

  ngOnInit() {}

}

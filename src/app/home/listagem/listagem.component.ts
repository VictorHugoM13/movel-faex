import { DisciplinaService } from './disciplina.service';
import { Component, OnInit } from '@angular/core';
import { Disciplina } from './disciplina.model';

@Component({
  selector: 'app-home',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {

  public disciplinas: Array<Disciplina>

  constructor(private DisciplinaService: DisciplinaService) { }

  ngOnInit() {
    this.disciplinas = this.DisciplinaService.getDisciplina();
  }

}

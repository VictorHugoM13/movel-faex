import { DisciplinaService } from '../disciplina.service';
import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../disciplina.model';

@Component({
  selector: 'app-home',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent {

  public disciplinas: Array<Disciplina>

  constructor(private DisciplinaService: DisciplinaService) { }

  ionViewWillEnter() {
    this.DisciplinaService.getDisciplinas().subscribe(
      disciplinas => {
        this.disciplinas = disciplinas
      }
    );
    
  }

}

import { AlunosService } from './../alunos.service';
import { Aluno } from './../alunos.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-professor',
  templateUrl: './listagem-professor.component.html',
  styleUrls: ['./listagem-professor.component.scss'],
})

export class ListagemProfessorComponent {
  
  public alunos: Array<Aluno>
  constructor(private AlunosService: AlunosService) { }

  ionViewWillEnter() {
    this.AlunosService.getAlunos().subscribe(
      alunos => {
        this.alunos = alunos
      }
    );
  }

}

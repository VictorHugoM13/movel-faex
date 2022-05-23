import { AlunosService } from './../alunos.service';
import { Aluno } from './../alunos.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})

export class ListagemComponent {

  public alunos: Aluno

  constructor(private AlunosService: AlunosService) { }

  ionViewWillEnter(id : string) {
    this.AlunosService.getAluno(id).subscribe(
      alunos => {
        this.alunos = alunos
      }
    );
    
  }

}

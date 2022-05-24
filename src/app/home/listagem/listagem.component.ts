import { ActivatedRoute } from '@angular/router';
import { AlunosService } from './../alunos.service';
import { Aluno } from './../alunos.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})

export class ListagemComponent {

  public aluno: Aluno;
  public id: string;

  constructor(private AlunosService: AlunosService, private route: ActivatedRoute) {
    
  }
  
  ionViewWillEnter() {
    this.AlunosService.getSession().then(
      id => {
        this.id = id;
        this.AlunosService.getAluno(this.id).subscribe(
          aluno => {
            this.aluno = aluno;
          }
        );
      }
    );
    
    
  }

}

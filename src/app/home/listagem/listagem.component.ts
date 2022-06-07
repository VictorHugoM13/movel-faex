import { Curso } from './../curso.model';
import { CursosService } from './../cursos.service';
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
  public cursos: Array<Curso>
  public id: string;

  constructor(private AlunosService: AlunosService, private route: ActivatedRoute, private CursosService : CursosService) {  
  }
  ionViewWillEnter() {
    this.AlunosService.getSession().then(
      id => {
        this.id = id;
        this.AlunosService.getAluno(this.id).subscribe(
          aluno => {
            this.aluno = aluno;
            this.CursosService.getCurso(aluno.curso).subscribe(
              curso => {
                this.aluno.curso_obj = curso;
              }
            )      
          }
        );
      }
    );   
  }
}
    
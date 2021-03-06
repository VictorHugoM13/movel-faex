import { Curso } from './../curso.model';
import { CursosService } from './../cursos.service';
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
  public cursos: Array<Curso>
  constructor(private AlunosService: AlunosService, private CursosService : CursosService) { }

  ionViewWillEnter() {
    this.AlunosService.getAlunos().subscribe(
      alunos => {
        this.alunos = alunos
        for (let aluno of this.alunos) {
          this.CursosService.getCurso(aluno.curso).subscribe(
            curso => {
              aluno.curso_obj = curso
            }
          )
        }
      }     
    )
  };
}

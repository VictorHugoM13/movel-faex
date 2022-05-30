import { AlertController } from '@ionic/angular';
import { Token } from './../tokens.model';
import { Aluno } from './../alunos.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from './../alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-horas',
  templateUrl: './registrar-horas.component.html',
  styleUrls: ['./registrar-horas.component.scss'],
})
export class RegistrarHorasComponent {

  public id : string;
  public aluno : Aluno;
  public token : Token;
  public codToken : number;
  public horasCompletadas : number;
  
  constructor(private AlunosService: AlunosService, private route: ActivatedRoute, private router: Router, public alertCtrl: AlertController) { }

  ionViewWillEnter() {
    this.AlunosService.getSession().then(
      id => {
        this.id = id;
        this.AlunosService.getToken(this.id).subscribe(
          token => {
            this.token = token;
            console.log(token.token);
            
          }
        )
        this.AlunosService.getAluno(this.id).subscribe(
          aluno => {
            this.aluno = aluno;
          }
        );
      }
    );
  }

  public onSetHoras(){
    if (this.token.status === 'invalid') {
      const alert = this.alertCtrl.create({
        message: 'Código ja usado, por favor, gerar outro código!',
        subHeader: 'Atenção',
        buttons: ['Ok']
       });
       alert.then(alert => alert.present());
    }

    else if (String(this.codToken) === String(this.token.token) && this.token.status === 'valid')  {
      if ((this.aluno.horasCompletadas+1) > this.aluno.horasTotais) {
        const alert = this.alertCtrl.create({
          message: 'Você já completou todas as horas!',
          subHeader: 'Atenção',
          buttons: ['Ok']
         });
         alert.then(alert => alert.present());
      }
      else {
        this.aluno.horasCompletadas += 1;
        this.AlunosService.setAluno(this.id, this.aluno).subscribe(
          () => {
            const alert = this.alertCtrl.create({
              message: 'Hora Computada!',
              subHeader: 'Atenção',
              buttons: ['Ok']
             });
             alert.then(alert => alert.present());
          this.router.navigate(['listagem']);
        }
        );
        this.token.status = 'invalid';
        this.AlunosService.setToken(this.id, this.token).subscribe(
          () => {
            console.log('Token atualizado');
          }
        );
      }
      
      
    }
    else {
      const alert = this.alertCtrl.create({
        message: 'Código Inválido!',
        subHeader: 'Atenção',
        buttons: ['Ok']
       });
       alert.then(alert => alert.present());
    }
   
  }
}

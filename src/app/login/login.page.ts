import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Aluno } from '../Model/aluno.model';

@Component({
  selector: 'app-login', 
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {

  ra: number;
  senha: string;

  constructor(public alertCtrl: AlertController, public router: Router) { }

  alunos: Array <Aluno> = [ 
    { ra: 10735, nome: 'Victor', senha: '1234' },
    { ra: 12243, nome: 'Lucas', senha: '4321' }
  ]

  ngOnInit() {
    
  }

  logar() {
    
    if (this.ra === undefined || this.senha === undefined) {
      const alert = this.alertCtrl.create({
        message: 'Preencha todos os campos!',
        subHeader: 'Atenção',
        buttons: ['Ok']
       });
      alert.then(alert => alert.present());
    }
    else {
      let flag = false;
      for (let i = 0; i < this.alunos.length; i++) {
        if (this.ra === this.alunos[i].ra) {
          flag = true;
          if (this.senha === this.alunos[i].senha) {
            flag = true;
            this.router.navigate(['home']);
            
          }
          else {
            const alert = this.alertCtrl.create({
              message: 'Dados Inválidos!',
              subHeader: 'Atenção',
              buttons: ['Ok']
             });
             alert.then(alert => alert.present());
             flag = true;
          }
        }
      }
      if (flag === false) {
        const alert = this.alertCtrl.create({
          message: 'RA não encontrado!',
          subHeader: 'Atenção',
          buttons: ['Ok']
         });
         alert.then(alert => alert.present());
      }
    }
        
  }
}

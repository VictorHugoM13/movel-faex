import { Usuario } from './usuario.model';
import { UsuarioService } from './usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-login', 
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage {

  id: string;
  senha: string;

  constructor(public alertCtrl: AlertController, public router: Router, private UsuarioService: UsuarioService) { }

  public usuarios: Array<Usuario>
  

  ionViewWillEnter() {
    this.UsuarioService.getUsuarios().subscribe(
      usuarios => {
        this.usuarios = usuarios
      }
    )
  }
  logar() {
    this.UsuarioService.getUsuarios().subscribe(
      usuarios => {
        this.usuarios = usuarios
        
        if (this.id === undefined || this.senha === undefined) {
          const alert = this.alertCtrl.create({
            message: 'Preencha todos os campos!',
            subHeader: 'Atenção',
            buttons: ['Ok']
           });
          alert.then(alert => alert.present());
        }
        else {
          let flag = false;
          for (let i = 0; i < this.usuarios.length; i++) {
            if (this.id === this.usuarios[i].id) {
              flag = true;
              if (this.senha === this.usuarios[i].senha && this.usuarios[i].tipo === 'aluno') {
                flag = true;
                this.router.navigate(['listagem/'+ this.id]);                
              }      
              else if (this.senha === this.usuarios[i].senha && this.usuarios[i].tipo === 'professor') {
                flag = true;
                this.router.navigate(['listagem-professor']);                
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
    )
    
    
        
  }
}

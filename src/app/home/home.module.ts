import { ListagemComponent } from './listagem/listagem.component';
import { RegistrarHorasComponent } from './registrar-horas/registrar-horas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, RegistrarHorasComponent, ListagemComponent]
})
export class HomePageModule {}

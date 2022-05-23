import { ListagemProfessorComponent } from './listagem-professor/listagem-professor.component';

import { ListagemComponent } from './listagem/listagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarHorasComponent } from './registrar-horas/registrar-horas.component';

const routes: Routes = [
  
  {
    path: 'listagem/:id',
    component: ListagemComponent
  },
  {
    path: 'registrar-horas',
    component: RegistrarHorasComponent
  },
  {
    path: 'listagem-professor',
    component: ListagemProfessorComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

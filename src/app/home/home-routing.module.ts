
import { ListagemComponent } from './listagem/listagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { RegistrarHorasComponent } from './registrar-horas/registrar-horas.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'listagem',
    component: ListagemComponent
  },
  {
    path: 'registrar-horas',
    component: RegistrarHorasComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}

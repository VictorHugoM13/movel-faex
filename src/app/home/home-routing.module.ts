
import { ListagemComponent } from './listagem/listagem.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarHorasComponent } from './registrar-horas/registrar-horas.component';

const routes: Routes = [
  
  {
    path: '',
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

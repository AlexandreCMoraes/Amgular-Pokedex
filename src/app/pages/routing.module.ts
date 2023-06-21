import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

// criar rotas para Home
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    // aqui recebe o parametro pra ir a pagina de details
    path: 'details/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  // alterado de forRoot para forChild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}

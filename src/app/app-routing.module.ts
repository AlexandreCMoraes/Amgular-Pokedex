import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// criar rotas para lazyloads
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
    // carregar as paginas desse modulo
      import('./pages/pages.module').then((p) => p.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

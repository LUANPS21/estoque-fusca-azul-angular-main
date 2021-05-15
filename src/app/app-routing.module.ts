import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueComponent } from './components/templates/estoque/estoque.component';
import { UpdateComponent } from './components/templates/update/update.component';

const routes: Routes = [
  {path:"", component: EstoqueComponent},
  {path:"update", component: UpdateComponent},
  {path:"update-produto/:id", component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

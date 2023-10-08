import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { CarroslistComponent } from './carros/carroslist/carroslist.component';
import { PessoadetailsComponent } from './pessoas/pessoadetails/pessoadetails.component';
import { PessoaslistComponent } from './pessoas/pessoaslist/pessoaslist.component';
import { CarrodetailsComponent } from './carros/carrodetails/carrodetails.component';
import { LivroslistComponent } from './livros/livroslist/livroslist.component';
import { LivrodetailsComponent } from './livros/livrodetails/livrodetails.component';

const routes: Routes = [
  {path: "", redirectTo: "app", pathMatch: "full" },
  {path: "app", component: IndexComponent, children:[
  {path: "carros-list", component: CarroslistComponent},
  {path: "new-carro", component: CarrodetailsComponent},
  {path: "livros-list", component: LivroslistComponent},
  {path: "new-livro", component: LivrodetailsComponent},
  {path: "pessoas-list", component: PessoaslistComponent},
  {path: "new-pessoa", component: PessoadetailsComponent}

  ]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

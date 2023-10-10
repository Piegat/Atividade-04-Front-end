import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { CarroslistComponent } from './components/carros/carroslist/carroslist.component';
import { PessoadetailsComponent } from './components/pessoas/pessoadetails/pessoadetails.component';
import { PessoaslistComponent } from './components/pessoas/pessoaslist/pessoaslist.component';
import { CarrodetailsComponent } from './components/carros/carrodetails/carrodetails.component';
import { LivroslistComponent } from './components/livros/livroslist/livroslist.component';
import { LivrodetailsComponent } from './components/livros/livrodetails/livrodetails.component';

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

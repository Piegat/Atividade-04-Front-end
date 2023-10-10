import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { FormControl, FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './layout/index/index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarroslistComponent } from './components/carros/carroslist/carroslist.component';
import { PessoaslistComponent } from './components/pessoas/pessoaslist/pessoaslist.component';
import { LivroslistComponent } from './components/livros/livroslist/livroslist.component';
import { CarrodetailsComponent } from './components/carros/carrodetails/carrodetails.component';
import { LivrodetailsComponent } from './components/livros/livrodetails/livrodetails.component';
import { PessoadetailsComponent } from './components/pessoas/pessoadetails/pessoadetails.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    CarroslistComponent,
    PessoaslistComponent,
    LivroslistComponent,
    CarrodetailsComponent,
    LivrodetailsComponent,
    PessoadetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

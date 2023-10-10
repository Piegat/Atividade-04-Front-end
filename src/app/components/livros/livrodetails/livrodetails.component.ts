import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../../../models/livros/livro';
import { LivroslistComponent } from '../livroslist/livroslist.component';

@Component({
  selector: 'app-livrodetails',
  templateUrl: './livrodetails.component.html',
  styleUrls: ['./livrodetails.component.scss']
})
export class LivrodetailsComponent {

    
  route = inject(ActivatedRoute);
  livro: Livro = new Livro();

  @Output() retorno = new EventEmitter<Livro>();

  livroList = inject(LivroslistComponent)


  constructor(){


  }

  salvar(){
    this.retorno.emit(this.livro)
  }

  
}

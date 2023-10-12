import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from '../../../models/livros/livro';
import { LivroslistComponent } from '../livroslist/livroslist.component';
import { LivrosService } from 'src/app/service/livros/livros.service';

@Component({
  selector: 'app-livrodetails',
  templateUrl: './livrodetails.component.html',
  styleUrls: ['./livrodetails.component.scss']
})
export class LivrodetailsComponent {

    
  route = inject(ActivatedRoute);
  
  @Input() livro: Livro = new Livro();
  @Output() retorno = new EventEmitter<Livro>();

  livroService = inject(LivrosService);


  constructor(){


  }

  salvar(){

    if(this.livro.id != 0){
    this.livroService.save(this.livro).subscribe({
      next: livro => { // QUANDO DÁ CERTO
        this.retorno.emit(livro);
        
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro! Observe o erro no console!');
        console.error(erro);
      }
    });  
  
  }else{    this.livroService.save(this.livro).subscribe({
    next: livro => { // QUANDO DÁ CERTO
      this.retorno.emit(livro);
      
    },
    error: erro => { // QUANDO DÁ ERRO
      alert('Exemplo de tratamento de erro! Observe o erro no console!');
      console.error(erro);
    }
  }); 
}}

  ngOnInit(): void{

    this.livro = Object.assign({}, this.livro);

  }

  
}

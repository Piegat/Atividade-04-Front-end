import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Pessoas } from '../../../models/pessoas/pessoas';
import { PessoaslistComponent } from '../pessoaslist/pessoaslist.component';
import { ActivatedRoute } from '@angular/router';
import { PessoasService } from 'src/app/service/pessoas/pessoas.service';

@Component({
  selector: 'app-pessoadetails',
  templateUrl: './pessoadetails.component.html',
  styleUrls: ['./pessoadetails.component.scss']
})
export class PessoadetailsComponent {

    
  @Input() pessoa: Pessoas = new Pessoas();
  @Output() retorno = new EventEmitter<Pessoas>();

  pessoaService = inject(PessoasService);


  constructor(){


  }

  salvar(){

    if(this.pessoa.id != 0){
    this.pessoaService.save(this.pessoa).subscribe({
      next: pessoa => { // QUANDO DÁ CERTO
        this.retorno.emit(pessoa);
        
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro! Observe o erro no console!');
        console.error(erro);
      }
    });  
  
  }else{    this.pessoaService.save(this.pessoa).subscribe({
    next: pessoa => { // QUANDO DÁ CERTO
      this.retorno.emit(pessoa);
      
    },
    error: erro => { // QUANDO DÁ ERRO
      alert('Exemplo de tratamento de erro! Observe o erro no console!');
      console.error(erro);
    }
  }); 
}}

  ngOnInit(): void{

    this.pessoa = Object.assign({}, this.pessoa);

  }

  


}

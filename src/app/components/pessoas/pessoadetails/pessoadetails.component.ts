import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Pessoas } from '../../../models/pessoas/pessoas';
import { PessoaslistComponent } from '../pessoaslist/pessoaslist.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoadetails',
  templateUrl: './pessoadetails.component.html',
  styleUrls: ['./pessoadetails.component.scss']
})
export class PessoadetailsComponent {

    
  route = inject(ActivatedRoute);
  pessoa: Pessoas = new Pessoas();

  @Output() retorno = new EventEmitter<Pessoas>();

  pessoaList = inject(PessoaslistComponent)


  constructor(){


  }

  salvar(){
    this.retorno.emit(this.pessoa)
  }

  


}

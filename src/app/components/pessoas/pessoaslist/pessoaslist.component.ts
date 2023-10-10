import { Component, inject } from '@angular/core';
import { Pessoas } from '../../../models/pessoas/pessoas';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {


  lista: Pessoas[] = [];

  modalService = inject(NgbModal)




  abrirModal(modal: any){
    this.modalService.open(modal, {size: 'lg'})
  }


  addList(pessoa: Pessoas){
    this.lista.push(pessoa)
    this.close()

  }

  close(){
    this.modalService.dismissAll();
  }
}

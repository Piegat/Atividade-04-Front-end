import { Component, inject } from '@angular/core';
import { Livro } from '../livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {


  lista: Livro[] = [];

  modalService = inject(NgbModal)




  abrirModal(modal: any){
    this.modalService.open(modal, {size: 'lg'})
  }


  addList(livro: Livro){
    this.lista.push(livro)
    this.close()

  }

  close(){
    this.modalService.dismissAll();
  }
}


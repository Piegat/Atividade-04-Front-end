import { Component, inject } from '@angular/core';
import { Carro } from '../../../models/carros/carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {


  lista: Carro[] = [];

  modalService = inject(NgbModal)




  abrirModal(modal: any){
    this.modalService.open(modal, {size: 'lg'})
  }


  addList(carro: Carro){
    this.lista.push(carro)
    this.close()

  }

  close(){
    this.modalService.dismissAll();
  }
}

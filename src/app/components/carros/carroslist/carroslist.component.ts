import { Component, inject } from '@angular/core';
import { Carro } from '../../../models/carros/carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarrosService } from 'src/app/service/carros/carros.service';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {

  lista: Carro[] = [];

  carroSelecionadoParaEdicao = new Carro();
  idSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal)
  carroService = inject(CarrosService)



  constructor(){

    this.listAll()

  }

  abrirModal(modal: any){
    this.modalService.open(modal, {size: 'lg'})
  }

  listAll() {

    this.carroSelecionadoParaEdicao = new Carro();
    this.carroService.listAll().subscribe({
      next: lista => { 
        this.lista = lista;
      },
      error: erro => {
        alert('Exemplo de tratamento de erro! Observe o erro no console!');
        console.error(erro);
      }
    });

  }


  addList(carro: Carro){
    this.lista.push(carro)
    this.close()

  }

  close(){
    this.modalService.dismissAll();
  }
  
  editar(modal: any, carro: Carro, id: number) {
    this.carroSelecionadoParaEdicao = Object.assign({}, carro);
    
    this.idSelecionadoParaEdicao = id;
  
    this.modalService.open(modal, { size: 'sm' });
  }

  deletar(id: number){

    this.lista = this.lista.filter(item => item.id !== id);
    this.carroService.delete(id).subscribe();
    
  }




  addOuEditarCarro(carro: Carro){

    this.listAll();

    if (this.carroSelecionadoParaEdicao.id > 0) { //MODO EDITAR
      this.lista[this.idSelecionadoParaEdicao] = carro;
    }else{
      this.lista.push(carro);
    }

    this.modalService.dismissAll();


  }
}

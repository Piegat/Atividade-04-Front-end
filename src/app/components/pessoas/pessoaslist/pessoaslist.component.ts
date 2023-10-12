import { Component, inject } from '@angular/core';
import { Pessoas } from '../../../models/pessoas/pessoas';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PessoasService } from 'src/app/service/pessoas/pessoas.service';

@Component({
  selector: 'app-pessoaslist',
  templateUrl: './pessoaslist.component.html',
  styleUrls: ['./pessoaslist.component.scss']
})
export class PessoaslistComponent {


  lista: Pessoas[] = [];

  modalService = inject(NgbModal);
  pessoaService = inject(PessoasService);


  pessoaSelecionadaParaEdicao: Pessoas = new Pessoas();
  idSelecionadoParaEdicao!: number;

  constructor(){

    this.listAll()

  }


  listAll() {

    this.pessoaSelecionadaParaEdicao = new Pessoas();
    this.pessoaService.listAll().subscribe({
      next: lista => { 
        this.lista = lista;
      },
      error: erro => {
        alert('Exemplo de tratamento de erro! Observe o erro no console!');
        console.error(erro);
      }
    });

  }


  abrirModal(modal: any){
    this.modalService.open(modal, {size: 'lg'})
  }


  close(){
    this.modalService.dismissAll();
  }


  editar(modal: any, pessoa: Pessoas, id: number) {
    this.pessoaSelecionadaParaEdicao = Object.assign({}, pessoa);
    
    this.idSelecionadoParaEdicao = id;
  
    this.modalService.open(modal, { size: 'sm' });
  }

  deletar(id: number){

    this.lista = this.lista.filter(item => item.id !== id);
    this.pessoaService.delete(id).subscribe();

  }




  addOuEditarPessoa(pessoa: Pessoas){

    this.listAll();

    this.modalService.dismissAll();
  }
  

}


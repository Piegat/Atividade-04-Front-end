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
  indiceSelecionadoParaEdicao!: number;

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


  editar(modal: any, pessoa: Pessoas, indice: number) {
    this.pessoaSelecionadaParaEdicao = Object.assign({}, pessoa);
    
    this.indiceSelecionadoParaEdicao = indice;
  
    this.modalService.open(modal, { size: 'sm' });
  }




  addOuEditarPessoa(pessoa: Pessoas){

    this.listAll();

    if (this.pessoaSelecionadaParaEdicao.id > 0) { //MODO EDITAR
      this.lista[this.indiceSelecionadoParaEdicao] = pessoa;
    }else{
      this.lista.push(pessoa);
    }

    this.modalService.dismissAll();


  }
  

}


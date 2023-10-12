import { Component, inject } from '@angular/core';
import { Livro } from '../../../models/livros/livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivrosService } from 'src/app/service/livros/livros.service';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {


  lista: Livro[] = [];

  livroSelecionadoParaEdicao = new Livro();
  idSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal)
  livroService = inject(LivrosService)


  constructor(){

    this.listAll()

  }

  listAll() {

    this.livroSelecionadoParaEdicao = new Livro();
    this.livroService.listAll().subscribe({
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

  
  editar(modal: any, livro: Livro, id: number) {
    this.livroSelecionadoParaEdicao = Object.assign({}, livro);
    
    this.idSelecionadoParaEdicao = id;
  
    this.modalService.open(modal, { size: 'sm' });
  }

  deletar(id: number){

    this.lista = this.lista.filter(item => item.id !== id);
    this.livroService.delete(id).subscribe();
    
  }

  addOuEditarLivro(livro: Livro){

    this.listAll();

    if (this.livroSelecionadoParaEdicao.id > 0) { //MODO EDITAR
      this.lista[this.idSelecionadoParaEdicao] = livro;
    }else{
      this.lista.push(livro);
    }

    this.modalService.dismissAll();


  }
}


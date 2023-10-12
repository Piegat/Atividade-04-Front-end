import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../../../models/carros/carro';
import { CarroslistComponent } from '../carroslist/carroslist.component';
import { CarrosService } from 'src/app/service/carros/carros.service';

@Component({
  selector: 'app-carrodetails',
  templateUrl: './carrodetails.component.html',
  styleUrls: ['./carrodetails.component.scss']
})
export class CarrodetailsComponent {
    
  route = inject(ActivatedRoute);
  
  @Input() carro: Carro = new Carro();
  @Output() retorno = new EventEmitter<Carro>();

  carroService = inject(CarrosService);


  constructor(){


  }

  salvar(){

    if(this.carro.id != 0){
    this.carroService.save(this.carro).subscribe({
      next: carro => { // QUANDO DÁ CERTO
        this.retorno.emit(carro);
        
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro! Observe o erro no console!');
        console.error(erro);
      }
    });  
  
  }else{    this.carroService.save(this.carro).subscribe({
    next: carro => { // QUANDO DÁ CERTO
      this.retorno.emit(carro);
      
    },
    error: erro => { // QUANDO DÁ ERRO
      alert('Exemplo de tratamento de erro! Observe o erro no console!');
      console.error(erro);
    }
  }); 
}}

  ngOnInit(): void{

    this.carro = Object.assign({}, this.carro);

  }

}

import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../../../models/carros/carro';
import { CarroslistComponent } from '../carroslist/carroslist.component';

@Component({
  selector: 'app-carrodetails',
  templateUrl: './carrodetails.component.html',
  styleUrls: ['./carrodetails.component.scss']
})
export class CarrodetailsComponent {

    
  route = inject(ActivatedRoute);
  carro: Carro = new Carro();

  @Output() retorno = new EventEmitter<Carro>();

  carroList = inject(CarroslistComponent)


  constructor(){


  }

  salvar(){
    this.retorno.emit(this.carro)
  }

  


}

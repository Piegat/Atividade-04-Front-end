import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {


  API: string = 'http://localhost:4200/api/'

  constructor() { }
}

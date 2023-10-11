import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoas } from 'src/app/models/pessoas/pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  API: string = 'http://localhost:8080/api/pessoa'
  http = inject(HttpClient)



  constructor() { }

  listAll(): Observable<Pessoas[]>{

    return this.http.get<Pessoas[]>(this.API+"/getAll");
  }

  getById(id: number): Observable<Pessoas>{

    let params = new HttpParams()
    .set('id', id.toString())

    return this.http.get<Pessoas>(this.API, {params: params})
  }


  save(pessoa: Pessoas): Observable<Pessoas> {
    return this.http.post<Pessoas>(this.API, pessoa);
  }

}

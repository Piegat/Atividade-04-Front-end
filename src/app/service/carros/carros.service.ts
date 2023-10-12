import { HttpClient, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from 'src/app/models/carros/carro';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {



  API: string = 'http://localhost:8080/api/carro'
  http = inject(HttpClient)



  constructor() { }

  listAll(): Observable<Carro[]>{
    return this.http.get<Carro[]>(this.API+"/getAll");
  }

  getById(id: number): Observable<Carro>{
    return this.http.get<Carro>(this.API + '/' + id )
  }

  edit(carro: Carro, id: number): Observable<Carro>{

    return this.http.put<Carro>(this.API, carro);
  }

  save(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(this.API, carro);
  }

  delete(id: number): Observable<HttpStatusCode>{
    console.log(id)
    return this.http.delete<HttpStatusCode>(this.API + '/' + id );
  }



}

import { HttpClient, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from 'src/app/models/livros/livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  API: string = 'http://localhost:8080/api/livro'
  http = inject(HttpClient)



  constructor() { }

  listAll(): Observable<Livro[]>{
    return this.http.get<Livro[]>(this.API+"/getAll");
  }

  getById(id: number): Observable<Livro>{

    let params = new HttpParams()
    .set('id', id.toString())

    return this.http.get<Livro>(this.API, {params: params})
  }

  edit(livro: Livro, id: number): Observable<Livro>{

    return this.http.put<Livro>(this.API, livro);
  }

  save(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.API, livro);
  }

  delete(id: number): Observable<HttpStatusCode>{

    return this.http.delete<HttpStatusCode>(this.API + '/' + id );
  }




}

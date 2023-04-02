import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { Subject } from '../Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals'
  private apiUrl2 = 'http://localhost:3000/subjects'

  constructor(private http: HttpClient) { } //tem que passar o http aqui porque ele nao consegue ter acesso ao HttpCliente direto da importação, dae passamos ele pelo constructor igual como se fosse o service e esse cara aqui (o http) vai ter os metodos get,put,post,delete

  remove(id: number){
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`); //nao precisa de um observable porque a exclusão já está sendo feita list-render.component.ts
  }
 

  removeSubject(id: number){
    return this.http.delete<Subject>(`${this.apiUrl2}/${id}`);
  }
  
  addAge(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.age = a.age++);
  } 

  getAll(): Observable<Animal[]>{
      return this.http.get<Animal[]>(this.apiUrl) //precisa fazer a requisção http para fazer conexao com os dados do banco
  }
  
  getAllSubjects(): Observable<Subject[]>{ //isso é um evento de observação, o observavavel, no caso o observavavel é do tipo <Subject[]> que é o meu Array declarado la no dbjson server
      return this.http.get<Subject[]>(this.apiUrl2) //esse get tem que ser o mesmo tipo do que esta no observavel entao o observavel que tem <Subject[]> tem que ter tambem no get <Subject[]> , e isso é um padrão do Angular para ele funcionar corretamente as requisições no HttClient que é o modulo dele , entao ele fica observando se essa Array de Subject chegam ou nao na nossa requisição da API 
  } 

  getItem(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }

  getItemSubject(id: number): Observable<Subject>{
    return this.http.get<Subject>(`${this.apiUrl2}/${id}`)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  // variavel criada com url da api
  private url: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100';

  constructor(private http: HttpClient) {}
  // pagando dados com qualquer valor <any> do Observable para nao ter que ficar tipando os dados recebidos
  get apiListAllPokemons(): Observable<any> {
    // retornando dados qualquer com <any> e
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        console.log(res);
      })
    );
  }
}

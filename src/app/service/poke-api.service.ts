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
    // retornando dados qualquer com <any> mostrando assim que disponiveis com pipe. Poderia usar map, mas tap (rxjs) nao modifica "dados?"e so mostra
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        // results é do que traz a api com os dados dos pokemon
        res.results.map((resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe(
            (res) => (resPokemons.status = res)
          );
        });
        // console.log(res);
      })
    );
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe((res) => res);
  }
}

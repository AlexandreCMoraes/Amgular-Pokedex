import { Component, OnInit } from '@angular/core';

// chamando o serviço de api aqui
import { PokeApiService } from './../../service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: any;
  public getAllPokemons: any;

  constructor(private pokeApiService: PokeApiService) {}
  // assim que carrega a pagina, é mostrado as dados
  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe((res) => {
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;
      // console.log(`Com todos os detalhes (status)`, res);
      // console.log(`Todos os pokemons`, this.getAllPokemons);
    });
  }

  public getSearch(value: string) {
    // console.log(value);
    // filtra valores iguais aos passados
    const filter = this.getAllPokemons.filter((res: any) => {
      // verifica se igual  a api
      return !res.name.indexOf(value.toLowerCase());
    });
    // aqui tem os dados cheio 
    this.getAllPokemons = filter;
  }
}

import { Component, OnInit } from '@angular/core';

// chamando o serviço de api aqui
import { PokeApiService } from './../../service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  public getAllPokemons: any;

  constructor(private pokeApiService: PokeApiService) {}
  // assim que carrega a pagina, é mostrado as dados
  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe((res) => {
      this.getAllPokemons = res.results;
      console.log(`Com todos os detalhes (status)`, res);
      console.log(`Todos os pokemons`, this.getAllPokemons);
    });
  }
}

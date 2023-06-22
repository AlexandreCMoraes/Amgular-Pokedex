import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  // mostrar em tela
  public pokemon: any;
  // mostrar se esta carregando a pagina enquanto no mostra nada
  public isLoading: boolean = false;
  //
  public apiError: boolean = false;

  constructor(
    private activatedRouter: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  // inicia ja pegando o metodo
  ngOnInit(): void {
    this.getPokemon;
  }

  // trocar para public em caso de erro ao subir pagina(build)
  get getPokemon() {
    // pegando o iddo pokemon
    const id = this.activatedRouter.snapshot.params['id'];
    // pegando os pokemons
    const pokemon = this.pokeApiService.apiGetPokemons(
      `${this.urlPokemon}/${id}`
    );

    // pega a especie do pokemon e vai retornar na pagina de detalhes
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    // carrega(busca) as duas api de pokemon(lista) e name() e depois da a resposta. acompanha o andamento das requisições (observables) passadas como parâmetro e emite um sinal quando todas as requisições forem finalizadas.
    return forkJoin([pokemon, name]).subscribe(
      (res) => {
        console.log(res);
        this.pokemon = res;
        // qnd estiver tudo certo, mostra em tela
        this.isLoading = true;
      },
      (error) => {
        this.apiError = true;
      }
    );
  }
}

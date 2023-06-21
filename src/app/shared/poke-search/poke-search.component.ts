import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss'],
})
export class PokeSearchComponent implements OnInit {
  // Output saida de dados- EmmitSearch pega os dados
  // EventEmitter emite dados tipando
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // chamando no html e pegando os dados digitados c/ keyup
  public search(value: string) {
    // console.log(`Valor digitado`, value);
    // 
    this.emmitSearch.emit(value);
  }
}

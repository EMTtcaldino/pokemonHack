import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '@app/services/pokeapi.service';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  pokemonList: any[] = [];
  constructor(private pokeService: PokeapiService) {}

  ngOnInit() {
    this.isLoading = true;
    this.pokeService.getAllPokemons().subscribe((res) => {
      res.results.map((pokemon: any) => {
        this.pokemonList.push(pokemon);
      });
    });
  }
}

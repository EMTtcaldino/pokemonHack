import { Component, Input, OnInit } from '@angular/core';
import { PokeapiService } from '@app/services/pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() query: any;
  quote: string | undefined;
  isLoading = false;
  pokemonList: any[] = [];
  constructor(private pokeService: PokeapiService) {}

  ngOnInit() {
    this.isLoading = true;
    for (let index = 1; index <= 150; index++) {
      this.pokeService.getPokemon(index).subscribe((res) => {
        this.pokemonList.push(res);
      });
    }
  }
}

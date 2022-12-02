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
  pokemonListCSV: any[] = [{ name: 'charmander' }];
  constructor(private pokeService: PokeapiService) {}

  ngOnInit() {
    this.isLoading = true;

    for (let index = 1; index <= 150; index++) {
      this.pokeService.getPokemons(index.toString()).subscribe((res) => {
        this.pokemonList.push(res);

        this.pokemonListCSV.push({ name: res.name });
      });

      if (this.pokemonList.length === 150) {
        console.log(this.pokemonList);
      }
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  baseUrl: string = environment.base_url;
  constructor(private http: HttpClient) {}

  getPokemon(index: any) {
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }

  getAllPokemons() {
    return this.http.get<any>(`${this.baseUrl}/pokemon`);
  }
}

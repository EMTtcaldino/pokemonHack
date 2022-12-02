import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  baseUrl: string = environment.baseUrl;
  constructor(private http:HttpClient) { }


  getPokemons(index:string){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
}

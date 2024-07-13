import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestApiService {
  private urlAPI: string;

  constructor(private http: HttpClient) {
    this.urlAPI = 'https://pokeapi.co/api/v2/pokemon';
  }

  public consultPokemon(pokemon: string): Observable<any> {
    return this.http.get<any>(`${this.urlAPI}/${pokemon}`);
  }
}

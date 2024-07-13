import { Component, OnInit } from '@angular/core';
import { TestApiService } from '../service/test-api.service';
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { join } from "@angular/compiler-cli";

@Component({
  selector: 'app-pokeapi',
  templateUrl: './pokeapi.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    NgStyle,
  ],
  styleUrls: ['./pokeapi.component.css']
})

export class PokeapiComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  pokemon: any = {};
  errorMessage: string = '';
  showImage: boolean = false;
  data: any = {};

  constructor(private testApiService: TestApiService) {
    this.myForm = new FormGroup({
      name: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const formValue = this.myForm.value;
    this.pokemon = formValue.name;
    console.log('Form submitted:', this.pokemon);
    this.searchPokemon(this.pokemon);
    this.myForm.reset();
  }

  searchPokemon(pokemon: string) {
    console.log('Searching for:', pokemon);
    this.testApiService.consultPokemon(pokemon).subscribe({
      next: this.handleSuccessMethod.bind(this),
      error: this.handleErrorMethod.bind(this),
    });
  }

  handleSuccessMethod(data: any) {
    console.log('Data received:', data);
    this.showImage = true;
    this.data = data;
  }

  handleErrorMethod() {
    console.log('Error occurred');
    this.showImage = false;
    this.data.name = "Pokemon no encontrado";
  }

  getTypes(types: any[]): string {
    return types.map(type => type.type.name).join(', ');
  }

  getTypeColor(type: string): string {
    const typeColors: { [key: string]: string } = {
      fire: '#F08030',
      water: '#6890F0',
      grass: '#78C850',
      electric: '#F8D030',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dark: '#705848',
      dragon: '#7038F8',
      steel: '#B8B8D0',
      fairy: '#EE99AC'
    };
    return typeColors[type.toLowerCase()] || '#938745';
  }

  getTypeColors(types: { type: { name: string } }[]): string[] {
    const typeColors: { [key: string]: string } = {
      fire: '#F08030',
      water: '#6890F0',
      grass: '#78C850',
      electric: '#F8D030',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dark: '#705848',
      dragon: '#7038F8',
      steel: '#B8B8D0',
      fairy: '#EE99AC'
    };

    return types.map(type => typeColors[type.type.name.toLowerCase()] || '#938745');
  }


}

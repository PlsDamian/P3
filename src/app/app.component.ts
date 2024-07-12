import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeapiComponent } from "./pokeapi/pokeapi.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokeapiComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p3';
}

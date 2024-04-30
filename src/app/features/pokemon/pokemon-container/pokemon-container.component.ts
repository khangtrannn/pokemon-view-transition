import { Component, OnInit, inject } from '@angular/core';
import { PokemonsStore } from '../pokemon.store';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.scss'],
  standalone: true,
  imports: [NgTemplateOutlet, JsonPipe]
})
export class PokemonContainerComponent {
  pokemonsStore = inject(PokemonsStore);
  isLoading = this.pokemonsStore.isLoading;
  pokemons = this.pokemonsStore.pokemons;
}

import { Component, inject } from '@angular/core';
import { PokemonsStore } from './pokemon.store';
import { PokemonCardComponent } from './ui/pokemon-card.component';

@Component({
  selector: 'app-pokemon-container',
  template: `
    <div class="tw-mt-10 tw-container tw-max-w-4xl tw-mx-auto">
      <div class="tw-flex tw-justify-between">
        <div>
          <h1>Brisa - Pokémon</h1>
          <p class="tw-mt-2">An example using View Transition with Brisa</p>
        </div>

        <p class="tw-mt-2">Made by <span class="tw-font-semibold">Khang Tran</span> with ❤️</p>
      </div>

      <div class="tw-mt-12 tw-grid tw-gap-6 tw-grid-cols-4">
        @for (pokemon of pokemons(); track pokemon.id) {
          <app-pokemon-card [pokemon]="pokemon" />
        }
      </div>
    </div>
  `,
  standalone: true,
  imports: [PokemonCardComponent],
})
export class PokemonContainerComponent {
  pokemonsStore = inject(PokemonsStore);
  pokemons = this.pokemonsStore.pokemons;
}

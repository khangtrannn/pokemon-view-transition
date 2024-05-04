import { Component, inject } from '@angular/core';
import { PokemonsStore } from './pokemon.store';
import { PokemonCardComponent } from './ui/pokemon-card.component';

@Component({
  selector: 'app-pokemon-container',
  template: `
    <div class="tw-mt-10 tw-container tw-max-w-4xl tw-mx-auto">
      <div class="tw-flex tw-justify-between">
        <div class="tw-flex tw-gap-4 tw-items-center">
          <img class="tw-h-[50px]" src="assets/angular-icon.svg" />

          <div class="tw-h-fit">
            <h1>Brisa - Pokémon</h1>
            <p class="tw-mt-[2px]">An example using View Transition with Brisa</p>
          </div>
        </div>

        <p style="view-transition-name: author;" class="tw-mt-2">
          Made with ❤️ by <span class="tw-font-semibold tw-italic">Khang Tran</span>
        ️</p>
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

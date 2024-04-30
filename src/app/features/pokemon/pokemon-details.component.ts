import { Component, effect, inject, input } from "@angular/core";
import { PokemonsStore } from "./pokemon.store";
import { PokemonCardComponent } from "./ui/pokemon-card.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pokemon-details',
  template: `
    @if (pokemonDetails()) {
      <div class="tw-mt-10 tw-container tw-mx-auto tw-max-w-3xl">
        <div class="tw-text-[#919191] tw-capitalize">
          <a routerLink="/">Poke</a>
          <span> / {{ pokemonDetails()!.type }} / </span>
          <span>{{pokemonDetails()!.id }}</span>
        </div>

        <div class="tw-mt-6 tw-mb-10 tw-flex tw-gap-8">
          <div class="tw-cursor-pointer tw-border tw-border-white tw-rounded-lg tw-shadow-md">
            <img [style.viewTransitionName]="pokemonDetails()!.id + '-image'" class="tw-w-[375px]" [src]="pokemonDetails()!.image" [alt]="pokemonDetails()!.id">
          </div>
          <div>
            <h1 class="tw-capitalize">{{ pokemonDetails()!.name }}</h1>
            <p class="tw-mt-4 tw-leading-6">{{ pokemonDetails()!.description }}</p>
          </div>
        </div>

        <p class="tw-font-semibold">More Pokémon</p>
        <div class="tw-mt-8 tw-grid tw-gap-6 tw-grid-cols-3">
          @for (pokemon of morePokemons(); track pokemon.id) {
            <app-pokemon-card [pokemon]="pokemon" />
          }
        </div>
      </div>
    }
  `,
  standalone: true,
  imports: [PokemonCardComponent, RouterLink],
})
export class PokemonDetailsComponent {
  id = input.required<string>();
  #pokemonsStore = inject(PokemonsStore);

  pokemonDetails = this.#pokemonsStore.pokemonDetail;
  morePokemons = this.#pokemonsStore.morePokemons;

  #loadPokemonDetailEffect = effect(() => {
    this.#pokemonsStore.loadPokemonDetail(this.id());
  }, { allowSignalWrites: true })
}

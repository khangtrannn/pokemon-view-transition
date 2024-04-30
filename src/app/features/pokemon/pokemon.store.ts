import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Pokemon } from "./pokemon.model";
import { POKEMONS } from "./pokemon-data";
import { computed } from "@angular/core";

type PokemonsSate = {
  pokemons: Pokemon[];
  morePokemons: Pokemon[];
  pokemonDetail: Pokemon | undefined;
};

const initialState: PokemonsSate = {
  pokemons: POKEMONS,
  morePokemons: [],
  pokemonDetail: undefined,
}

export const PokemonsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    loadPokemonDetail(id: string) {
      const pokemon = store.pokemons().find((pokemon) => pokemon.id === id);
      const morePokemons = store.pokemons().filter(pokemon => pokemon.id !== id);
      patchState(store, { pokemonDetail: pokemon, morePokemons });
    }
  })),
);

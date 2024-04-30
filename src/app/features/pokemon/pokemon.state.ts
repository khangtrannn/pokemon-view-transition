import { signalStore, withState } from "@ngrx/signals";

export interface Pokemon {

}

type PokemonsSate = {
  pokemons: Pokemon[];
  isLoading: boolean;
};

const initialState: PokemonsSate = {
  pokemons: [],
  isLoading: true,
}

export const PokemonsStore = signalStore(
  withState(initialState),
);

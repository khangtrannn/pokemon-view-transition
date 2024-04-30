import { signalStore, withState } from "@ngrx/signals";
import { Pokemon } from "./pokemon.model";
import { POKEMONS } from "./pokemon-data";

type PokemonsSate = {
  pokemons: Pokemon[];
  isLoading: boolean;
};

const initialState: PokemonsSate = {
  pokemons: POKEMONS,
  isLoading: true,
}

export const PokemonsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
);

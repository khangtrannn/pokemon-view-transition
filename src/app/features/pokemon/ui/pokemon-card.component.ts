import { Component, computed, input } from "@angular/core";
import { Pokemon } from "../pokemon.model";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pokemon-card',
  template: `
    <a [routerLink]="pokemonUrl()">
      <div class="
        tw-cursor-pointer tw-border tw-border-white tw-rounded-lg tw-shadow-md
        tw-transition-shadow tw-duration-[0.3s] hover:tw-shadow-[0_0_15px_rgba(33,33,33,0.2)] tw-p-4
      ">
        <img [style.viewTransitionName]="pokemon().id + '-image'" class="tw-w-full hover:tw-scale-110 tw-transition tw-duration-500 tw-cursor-pointer tw-object-cover" [src]="pokemon().image" />
        <div class="tw-mt-4 tw-mx-2">
          <p class="tw-font-semibold tw-capitalize">{{ pokemon().name }}</p>
          <p class="tw-mt-2 tw-truncate tw-text-xs">{{ pokemon().description }}</p>
        </div>
      </div>
    </a>
  `,
  standalone: true,
  imports: [RouterLink],
})
export class PokemonCardComponent {
  pokemon = input.required<Pokemon>();
  pokemonUrl = computed(() => `/pokemon/${this.pokemon().id}`);
}

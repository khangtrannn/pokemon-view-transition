import { Routes } from "@angular/router";
import { PokemonLayoutComponent } from "./pokemon-layout.component";

export default <Routes>[
  {
    path: '',
    component: PokemonLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: async () => (await import('./pokemon-container.component')).PokemonContainerComponent,
      },
      {
        path: 'pokemon/:id',
        loadComponent: async () => (await import('./pokemon-details.component')).PokemonDetailsComponent,
      }
    ]
  }
]

import getPokemonInfoAdapter from '../../../adapter/getPokemon';
import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import eGetAllFavPokemonErrorMessages from '../enums/eGetAllFavPokemonErrorMessages';

export interface iGetAllFavoritePokemonDeps extends iCommonDependencies {
  ErrorMessages: typeof eGetAllFavPokemonErrorMessages;
  getPokemonInfoAdapter: typeof getPokemonInfoAdapter;
}

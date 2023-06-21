import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import getAllFavoritePokemonDomain from '../../../domain/myPokemons';

export interface iPokedexDeps extends iCommonDependencies {
  getAllFavoritePokemonDomain: typeof getAllFavoritePokemonDomain;
}

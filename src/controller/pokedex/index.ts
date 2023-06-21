import getAllFavoritePokemonDomain from '../../domain/myPokemons/index';
import { controllerCommonDeps } from '../common/controllerCommonDeps';
import pokedexControllerInstance from './pokedexControllerInstance';

const pokedexController = pokedexControllerInstance({
  ...controllerCommonDeps,
  getAllFavoritePokemonDomain,
});

export default pokedexController;

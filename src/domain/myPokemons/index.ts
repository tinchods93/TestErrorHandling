import getPokemonInfoAdapter from '../../adapter/getPokemon';
import { domainsCommonDeps } from '../common/domainsCommonDeps';
import eGetAllFavPokemonErrorMessages from './enums/eGetAllFavPokemonErrorMessages';
import getAllFavoritePokemon from './getAllFavoritePokemon';

const getAllFavoritePokemonDomain = getAllFavoritePokemon({
  ...domainsCommonDeps,
  getPokemonInfoAdapter,
  ErrorMessages: eGetAllFavPokemonErrorMessages,
});

export default getAllFavoritePokemonDomain;

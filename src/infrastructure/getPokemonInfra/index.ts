import config from '../../../config/index';
import eHttpMethods from '../../common/enums/httpMethods';
import getPokemonService from './getPokemonService';
import { sendRequestInfraDeps } from '../common/infraCommonDeps';

export const getPokemonInfra = getPokemonService({
  ...sendRequestInfraDeps,
  url: config.pokemonService.getPokemonByName,
  method: eHttpMethods.GET,
});

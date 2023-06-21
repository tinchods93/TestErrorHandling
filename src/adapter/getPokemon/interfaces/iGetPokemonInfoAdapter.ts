import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import { getPokemonInfra } from '../../../infrastructure/getPokemonInfra/index';

export interface iGetPokemonInfoAdapterDeps extends iCommonDependencies {
  getPokemonInfra: typeof getPokemonInfra;
}

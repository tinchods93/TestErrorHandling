import getPokemonAdapterInstance from './getPokemonInfoAdapter';
import { getPokemonInfra } from '../../infrastructure/getPokemonInfra/index';
import { adaptersCommonDeps } from '../common/adaptersCommonDeps';

const getPokemonInfoAdapter = getPokemonAdapterInstance({
  ...adaptersCommonDeps,
  getPokemonInfra,
});

export default getPokemonInfoAdapter;

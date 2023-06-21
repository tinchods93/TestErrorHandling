import basePaths from './basePaths';

const config = {
  pokemonService: {
    getPokemonByName: `${basePaths.pokemon}/pokemon/:name`,
  },
};

export default config;

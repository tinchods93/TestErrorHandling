import { iCustomError } from '../../common/utils/errorHandler/interfaces/iCustomError';
import { iGetPokemonInfoAdapterDeps } from './interfaces/iGetPokemonInfoAdapter';

const getPokemonAdapterInstance =
  (dependencies: iGetPokemonInfoAdapterDeps) =>
  async (pokemonName: string, testError?: boolean) => {
    const {
      getPokemonInfra,
      ErrorCodes,
      ErrorHandler,
      ErrorLayer,
      statusCodes,
      DefaultErrorName,
      throwTestError,
    } = dependencies;

    try {
      const response = await getPokemonInfra({ name: pokemonName });

      throwTestError(testError);

      return {
        abilities: response.abilities,
        base_experience: response.base_experience,
        height: response.height,
        id: response.id,
        name: response.name,
        stats: response.stats,
        types: response.types,
      };
    } catch (error) {
      if (error instanceof ErrorHandler) {
        throw error;
      }

      const customError: iCustomError = {
        code: ErrorCodes.GET_POKEMON,
        layer: ErrorLayer,
        status: error.status ?? statusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
        name: error.name ?? DefaultErrorName,
        payload: { pokemonName },
      };

      throw new ErrorHandler(customError);
    }
  };

export default getPokemonAdapterInstance;

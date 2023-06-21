import { iUserProfile } from '../../common/interfaces/iUserProfile';
import { iCustomError } from '../../common/utils/errorHandler/interfaces/iCustomError';
import { iPokedexDeps } from './interfaces/iPokedex';

const pokedexControllerInstance =
  (dependencies: iPokedexDeps) =>
  async (input: iUserProfile, testError?: boolean) => {
    const {
      DefaultErrorName,
      ErrorCodes,
      ErrorHandler,
      ErrorLayer,
      statusCodes,
      throwTestError,
      getAllFavoritePokemonDomain,
    } = dependencies;

    try {
      const pokemonFavs = await getAllFavoritePokemonDomain(input);

      throwTestError(testError);

      return {
        ...input,
        pokemon_favorites: pokemonFavs,
      };
    } catch (error) {
      if (error instanceof ErrorHandler) {
        throw error;
      }

      const customError: iCustomError = {
        code: ErrorCodes.GET_POKEDEX_INFO,
        layer: ErrorLayer,
        status: error.status ?? statusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
        name: error.name ?? DefaultErrorName,
        payload: { input },
      };

      throw new ErrorHandler(customError);
    }
  };

export default pokedexControllerInstance;

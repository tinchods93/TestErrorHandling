import { iUserProfile } from '../../common/interfaces/iUserProfile';
import { iCustomError } from '../../common/utils/errorHandler/interfaces/iCustomError';
import { iGetAllFavoritePokemonDeps } from './interfaces/iGetAllFavoritePokemon';

const getAllFavoritePokemon =
  (dependencies: iGetAllFavoritePokemonDeps) =>
  async (userProfile: iUserProfile, testError?: boolean) => {
    const {
      getPokemonInfoAdapter,
      ErrorCodes,
      ErrorMessages,
      ErrorHandler,
      ErrorLayer,
      DefaultErrorName,
      statusCodes,
      throwTestError,
    } = dependencies;

    try {
      if (
        !userProfile.pokemon_favorites ||
        !userProfile?.pokemon_favorites?.length
      ) {
        const customError: iCustomError = {
          code: ErrorCodes.GET_ALL_FAVORITES_POKEMON,
          layer: ErrorLayer,
          status: statusCodes.CONFLICT,
          message: ErrorMessages.MISSING_FAVORITES,
          name: 'HANDLED_DOMAIN_ERROR',
          payload: { userProfile },
        };

        throw new ErrorHandler(customError);
      }

      throwTestError(testError);

      const promises = userProfile.pokemon_favorites.map(async (pokeName) => {
        return getPokemonInfoAdapter(pokeName).catch(() => undefined);
      });
      return (await Promise.all(promises)).filter(
        (value) => value !== undefined
      );
    } catch (error) {
      const customError: iCustomError = {
        code: ErrorCodes.GET_ALL_FAVORITES_POKEMON,
        layer: ErrorLayer,
        status: error.status ?? statusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
        name: error?.name ?? DefaultErrorName,
        payload: { userProfile },
      };

      throw new ErrorHandler(customError);
    }
  };

export default getAllFavoritePokemon;

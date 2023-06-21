import { iCustomError } from '../../common/utils/errorHandler/interfaces/iCustomError';
import { iInfraRequestDeps } from '../common/interfaces/iInfraCommon';
import { iGetPokemonServiceInput } from './interface/iGetPokemonService';

const getPokemonService =
  (dependencies: iInfraRequestDeps) =>
  async ({ name, testError }: iGetPokemonServiceInput) => {
    const {
      sendRequest,
      url,
      method,
      ErrorCodes,
      ErrorHandler,
      ErrorLayer,
      statusCodes,
      DefaultErrorName,
      throwTestError,
    } = dependencies;

    try {
      const params = {
        url: url.replace(':name', name),
        method,
      };

      throwTestError(testError);

      return sendRequest(params);
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
        payload: { name },
      };

      throw new ErrorHandler(customError);
    }
  };
export default getPokemonService;

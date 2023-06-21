import { AxiosResponse, AxiosError } from 'axios';
import {
  iSendRequestDependencies,
  iSendRequestInput,
} from './interfaces/iSendRequest';
import { iCustomError } from '../../utils/errorHandler/interfaces/iCustomError';

const sendRequest = (dependencies: iSendRequestDependencies) => {
  const {
    axios,
    layerCodes,
    StatusCodes,
    ErrorHandler,
    eErrorCodes,
    eErrorTypes,
  } = dependencies;

  return async ({
    url,
    method,
    data,
    headers,
  }: iSendRequestInput): Promise<any> => {
    try {
      const response: AxiosResponse = await axios({
        url,
        method,
        data,
        headers,
      });

      return response.data;
    } catch (error) {
      const axiosError: AxiosError = error;

      const customError: iCustomError = {
        code: axiosError.code ?? eErrorCodes.DEFAULT,
        layer: layerCodes.SEND_REQUEST,
        status:
          axiosError.response?.status ??
          axiosError.status ??
          StatusCodes.INTERNAL_SERVER_ERROR,
        request_data:
          axiosError.request?.config || axiosError.config
            ? {
                url: axiosError.request?.config?.url || axiosError.config?.url,
                method:
                  axiosError.request?.config?.method ||
                  axiosError.config?.method,
                headers:
                  axiosError.request?.headers || axiosError.config?.headers,
                body: data,
              }
            : undefined,
        response_data: axiosError.response?.data,
        message: axiosError.message,
        name: 'REQUEST_ERROR',
        type: eErrorTypes.handled,
      };

      throw new ErrorHandler(customError); // Rethrow the error for the caller to handle
    }
  };
};

export default sendRequest;

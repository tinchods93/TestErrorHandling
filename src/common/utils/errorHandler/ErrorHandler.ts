import { StatusCodes } from 'http-status-codes';
import eErrorTypes from '../../enums/errorTypes';
import { iCustomError } from './interfaces/iCustomError';
import { fillerReplace } from '../../constants/layerCodes';

class ErrorHandler implements iCustomError {
  status: StatusCodes;

  code: string;

  layer: string;

  message?: string;

  response_data?: any;

  request_data?: any;

  payload?: any;

  type?: eErrorTypes;

  name?: string;

  constructor(inputError: iCustomError) {
    this.status = inputError.status;
    this.code = inputError.code;
    this.layer = inputError.layer.replace(fillerReplace, inputError.code);
    this.message = inputError.message;
    this.response_data = inputError.response_data;
    this.request_data = inputError.request_data;
    this.payload = inputError.payload;
    this.type = inputError.type ?? eErrorTypes.handled;
    this.name = inputError.name ?? 'CUSTOM_ERROR';
    console.error(this);
  }

  get(): ErrorHandler {
    return this;
  }
}

export default ErrorHandler;

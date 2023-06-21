import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import eHttpMethods from '../../../enums/httpMethods';
import { layerCodes } from '../../../constants/layerCodes';
import ErrorHandler from '../../../utils/errorHandler/ErrorHandler';
import eErrorTypes from '../../../enums/errorTypes';
import eErrorCodes from '../../../enums/errorCodes';

export interface iSendRequestInput {
  url: string;
  method: eHttpMethods;
  data?: any;
  headers?: any;
}

export interface iSendRequestDependencies {
  axios: typeof axios;
  StatusCodes: typeof StatusCodes;
  layerCodes: typeof layerCodes;
  ErrorHandler: typeof ErrorHandler;
  eErrorCodes: typeof eErrorCodes;
  eErrorTypes: typeof eErrorTypes;
}

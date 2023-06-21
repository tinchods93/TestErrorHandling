import { StatusCodes } from 'http-status-codes';
import eErrorTypes from '../../../enums/errorTypes';

export interface iCustomError {
  status: StatusCodes;
  code: string;
  layer: string;
  message?: string;
  response_data?: any;
  request_data?: any;
  payload?: any;
  type?: eErrorTypes;
  name?: string;
}

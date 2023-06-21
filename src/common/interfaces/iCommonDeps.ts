import { StatusCodes } from 'http-status-codes';
import eErrorCodes from '../enums/errorCodes';
import ErrorHandler from '../utils/errorHandler/ErrorHandler';
import ErrorNames from '../enums/errorNames';
import throwTestError from '../utils/throwTestError';

export interface iCommonDependencies {
  ErrorCodes: typeof eErrorCodes;
  ErrorHandler: typeof ErrorHandler;
  throwTestError: typeof throwTestError;
  ErrorLayer: string;
  DefaultErrorName: ErrorNames;
  statusCodes: typeof StatusCodes;
}

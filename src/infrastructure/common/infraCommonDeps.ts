import { StatusCodes } from 'http-status-codes';
import { layerCodes } from '../../common/constants/layerCodes';
import eErrorCodes from '../../common/enums/errorCodes';
import ErrorHandler from '../../common/utils/errorHandler/ErrorHandler';

import sendRequest from '../../common/services/sendRequest';
import { iCommonDependencies } from '../../common/interfaces/iCommonDeps';
import ErrorNames from '../../common/enums/errorNames';
import throwTestError from '../../common/utils/throwTestError';

export const infraCommonDeps: iCommonDependencies = {
  ErrorCodes: eErrorCodes,
  ErrorHandler,
  throwTestError,
  ErrorLayer: layerCodes.INFRA,
  DefaultErrorName: ErrorNames.FAULT_INFRA,
  statusCodes: StatusCodes,
};

export const sendRequestInfraDeps = {
  ...infraCommonDeps,
  sendRequest,
  statusCodes: StatusCodes,
};

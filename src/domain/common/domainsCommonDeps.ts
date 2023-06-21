import { StatusCodes } from 'http-status-codes';
import { layerCodes } from '../../common/constants/layerCodes';
import eErrorCodes from '../../common/enums/errorCodes';
import ErrorHandler from '../../common/utils/errorHandler/ErrorHandler';
import { iCommonDependencies } from '../../common/interfaces/iCommonDeps';
import ErrorNames from '../../common/enums/errorNames';
import throwTestError from '../../common/utils/throwTestError';

export const domainsCommonDeps: iCommonDependencies = {
  ErrorCodes: eErrorCodes,
  ErrorHandler,
  throwTestError,
  DefaultErrorName: ErrorNames.FAULT_DOMAIN,
  ErrorLayer: layerCodes.DOMAIN,
  statusCodes: StatusCodes,
};

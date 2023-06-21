import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { layerCodes } from '../../constants/layerCodes';
import ErrorHandler from '../../utils/errorHandler/ErrorHandler';
import eErrorTypes from '../../enums/errorTypes';
import sendRequest from './sendRequest';
import eErrorCodes from '../../enums/errorCodes';

const sendRequestService = sendRequest({
  axios,
  layerCodes,
  StatusCodes,
  ErrorHandler,
  eErrorCodes,
  eErrorTypes,
});

export default sendRequestService;

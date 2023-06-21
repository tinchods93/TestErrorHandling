import eHttpMethods from '../../../common/enums/httpMethods';
import { iCommonDependencies } from '../../../common/interfaces/iCommonDeps';
import sendRequest from '../../../common/services/sendRequest';

export interface iInfraRequestDeps extends iCommonDependencies {
  sendRequest: typeof sendRequest;
  url: string;
  method: eHttpMethods;
  headers?: any;
  data?: any;
}

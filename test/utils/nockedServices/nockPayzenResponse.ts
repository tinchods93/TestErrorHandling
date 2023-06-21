// import mockResponse from '../mocks/payzen/mockPayzenResponse.json';
import {
  cancelInfraMockOk,
  psp025,
  psp610,
  approved,
} from '../../mocks/infrastructure/payzen';

const domain = 'https://api.payzen.lat';
export const nockCreatePayzenResponse = ({
  nockInstance,
  status = 200,
  useMock = 'approved',
}) => {
  const mocks = {
    PSP_025: psp025,
    PSP_513: { code: 500 },
    PSP_610: psp610,
    approved,
  };

  return nockInstance(domain)
    .post('/api-payment/V4/PCI/Charge/CreatePayment')
    .reply(status, mocks[useMock]);
};

export const nockCancelPayzenResponse = ({
  nockInstance,
  statusCode = 'SUCCESS',
}) => {
  const mocks = {
    SUCCESS: cancelInfraMockOk,
  };
  return nockInstance(domain)
    .post('/api-payment/V4/Transaction/CancelOrRefund')
    .reply(200, mocks[statusCode]);
};

import {
  getPaymentPayzenCancelling,
  getPaymentSonqoCancelling,
} from '../../mocks/infrastructure/getPayment';

const domain = 'https://e1-api.ranty.io';
export const nockGetPayzenPaymentResponse = ({
  nockInstance,
  statusCode,
  paymentId,
}) => {
  const mocks = {
    CANCELLING: getPaymentPayzenCancelling,
  };

  const usedMock = mocks[statusCode];

  usedMock.id = paymentId;

  return nockInstance(domain)
    .get(`/api/payments/${paymentId}`)
    .reply(200, usedMock);
};

export const nockGetSonqoPaymentResponse = ({
  nockInstance,
  statusCode,
  paymentId,
}) => {
  const mocks = {
    CANCELLING: getPaymentSonqoCancelling,
  };

  const usedMock = mocks[statusCode];

  usedMock.id = paymentId;

  return nockInstance(domain)
    .get(`/api/payments/${paymentId}`)
    .reply(200, usedMock);
};

import {
  sonqoPaymentInfraOk,
  cancelledSonqoMock,
  sonqoPaymentInfraFailedAccountIdentity,
} from '../../mocks/infrastructure/sonqo';

const domain = 'https://e1-punku.apinaranja.com';

export const nockCancelSonqoResponse = ({ nockInstance, paymentId }) => {
  return nockInstance(domain)
    .post(`/payments-ms/payment/${paymentId}/refunds`)
    .reply(200, cancelledSonqoMock);
};

export const nockPaymentSonqoResponse = ({ nockInstance, statusCode }) => {
  const payloads = {
    APPROVED: sonqoPaymentInfraOk,
    REJECTED: sonqoPaymentInfraFailedAccountIdentity,
  };
  return nockInstance(domain)
    .post('/payments-ms/payment')
    .reply(200, payloads[statusCode]);
};

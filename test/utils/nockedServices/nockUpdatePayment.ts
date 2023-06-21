import {
  cancelSonqoMock,
  cancelPayzenMock,
  rejectedSonqoMock,
} from '../../mocks/infrastructure/updatePayment';

const domain = 'https://e1-api.ranty.io';
export const nockUpdateCancellingPaymentSonqo = ({
  nockInstance,
  paymentId,
}) => {
  cancelSonqoMock.payment_id = paymentId;
  return nockInstance(domain)
    .put(`/api/payments/${paymentId}`)
    .reply(200, cancelSonqoMock);
};

export const nockUpdatePaymentSonqoCancelled = ({
  nockInstance,
  paymentId,
}) => {
  cancelSonqoMock.payment_id = paymentId;
  return nockInstance(domain)
    .put(`/api/payments/${paymentId}`)
    .reply(200, cancelSonqoMock);
};

export const nockUpdatePaymentSonqoRejected = ({ nockInstance, paymentId }) => {
  rejectedSonqoMock.payment_id = paymentId;
  return nockInstance(domain)
    .put(`/api/payments/${paymentId}`)
    .reply(200, rejectedSonqoMock);
};

export const nockUpdateCancellingPaymentPayzen = ({
  nockInstance,
  paymentId,
}) => {
  cancelPayzenMock.payment_id = paymentId;
  return nockInstance(domain)
    .put(`/api/payments/${paymentId}`)
    .reply(200, cancelPayzenMock);
};

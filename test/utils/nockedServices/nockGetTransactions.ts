import { getTransactionsSonqoCancelMock } from '../../mocks/infrastructure/getTransactions';

const domain = 'https://e1-api.ranty.io';

export const nockGetSonqoTransactionResponse = ({
  nockInstance,
  statusCode,
  paymentId,
}) => {
  const mocks = {
    CANCELLING: getTransactionsSonqoCancelMock,
  };

  const usedMock = mocks[statusCode].map((transaction) => {
    transaction.payment_id = paymentId;
    return transaction;
  });

  return nockInstance(domain)
    .get(`/api/payments/${paymentId}/transactions`)
    .reply(200, usedMock);
};

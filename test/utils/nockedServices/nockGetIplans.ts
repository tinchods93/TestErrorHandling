import { CARD_TYPES } from '../../../src/common/enums/cardEnums';
import { iPlansNotFoundMock } from '../../mocks/infrastructure/iPlans';

const domain = 'https://e1-api.ranty.io';
export const nockGetIplansNotFound = ({
  nockInstance,
  gateway,
  storeId,
  posId,
  amount,
  cardBrand = 'VISA',
  cardType = CARD_TYPES.DEBIT,
  iPlanId,
}) => {
  console.log(
    'DOMAIN',
    `/installment_plans/gateway/${gateway}/store/${storeId}/pos/${posId}?card_brand=${cardBrand}&card_type=${cardType}&amount=${amount}&installment_plan_id=${iPlanId}`
  );
  return nockInstance(domain)
    .get(
      `/installment_plans/gateway/${gateway}/store/${storeId}/pos/${posId}?card_brand=${cardBrand}&card_type=${cardType}&amount=${amount}&installment_plan_id=${iPlanId}`
    )
    .reply(200, iPlansNotFoundMock);
};

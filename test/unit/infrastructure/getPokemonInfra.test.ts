import outputTestResponse from '../../utils/outputTestResponse';
import sendRequest200OkOutput from '../../mocks/outputs/unit/commons/sendRequest/sendRequest200Ok.json';
// import { customErrorExpected } from '../../mocks/outputs/unit/commons/sendRequest/customErrorSendRequest';
import compareJsons from '../../utils/compareJsons';
import { getPokemonInfra } from '../../../src/infrastructure/getPokemonInfra/index';
import ErrorHandler from '../../../src/common/utils/errorHandler/ErrorHandler';
/* eslint-disable no-console */

const testName = 'getPokemonInfra';

describe(`UNIT - Infra - ${testName}`, () => {
  it('Get - 200', async () => {
    const response = await getPokemonInfra({ name: 'pikachu' });

    outputTestResponse({
      testName: `${testName}_200`,
      payload: response,
      testType: 'TEST',
    });

    // regression test
    const compare = compareJsons({
      expected: sendRequest200OkOutput,
      target: response,
    });

    outputTestResponse({
      testName: `${testName}_200`,
      payload: compare,
      testType: 'COMPARE',
    });

    expect(compare.missingData?.length).toBe(0);

    return 'Should return OK';
  });

  it('Get - 404', async () => {
    await getPokemonInfra({ name: 'pikachuu' }).catch((error) => {
      expect(error instanceof ErrorHandler).toBeTruthy();
      expect(error.status).toBe(404);
      expect(error.layer).toBe('SEND_REQUEST#ERR_BAD_REQUEST');
    });

    return 'Should return OK';
  });

  it('Get - 500', async () => {
    await getPokemonInfra({ name: 'pikachu', testError: true }).catch(
      (error) => {
        expect(error instanceof ErrorHandler).toBeTruthy();
        expect(error.status).toBe(500);
        expect(error.layer).toBe('INFRA#GET_POKEMON_FAILED');

        const compare = compareJsons({
          expected: {
            status: 500,
            code: 'GET_POKEMON_FAILED',
            layer: 'INFRA#GET_POKEMON_FAILED',
            message: "Cannot read properties of undefined (reading 'c')",
            payload: { name: 'pikachu' },
            type: 'CUSTOM_HANDLED',
            name: 'CUSTOM_ERROR',
          },
          target: error,
        });

        outputTestResponse({
          testName: `${testName}_500`,
          payload: compare,
          testType: 'COMPARE',
        });
        expect(compare.missingData?.length).toBe(0);
      }
    );

    return 'Should return OK';
  });
});

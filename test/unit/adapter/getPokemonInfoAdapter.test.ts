/* eslint-disable camelcase */
import outputTestResponse from '../../utils/outputTestResponse';
import compareJsons from '../../utils/compareJsons';
import getPokemonInfoAdapter from '../../../src/adapter/getPokemon';
import { getPokemonInfoAdapter_200 } from '../../mocks/outputs/unit/adapter/getPokemonInfoAdapterOutput';
import ErrorHandler from '../../../src/common/utils/errorHandler/ErrorHandler';
/* eslint-disable no-console */

const testName = 'getPokemonInfoAdapter';

describe(`UNIT - Adapter - ${testName}`, () => {
  it('Get - 200', async () => {
    const response = await getPokemonInfoAdapter('pikachu');

    outputTestResponse({
      testName: `${testName}_200`,
      payload: response,
      testType: 'TEST',
    });

    // regression test
    const compare = compareJsons({
      expected: getPokemonInfoAdapter_200,
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
    await getPokemonInfoAdapter('pikachuu').catch((error) => {
      expect(error instanceof ErrorHandler).toBeTruthy();
      expect(error.status).toBe(404);
      expect(error.layer).toBe('SEND_REQUEST#ERR_BAD_REQUEST');
    });

    return 'Should return OK';
  });

  it('Get - 500', async () => {
    await getPokemonInfoAdapter('pikachu', true).catch((error) => {
      expect(error instanceof ErrorHandler).toBeTruthy();
      expect(error.status).toBe(500);
      expect(error.layer).toBe('ADAPTER#GET_POKEMON_FAILED');

      const compare = compareJsons({
        expected: {
          status: 500,
          code: 'GET_POKEMON_FAILED',
          layer: 'ADAPTER#GET_POKEMON_FAILED',
          message: "Cannot read properties of undefined (reading 'c')",
          payload: { pokemonName: 'pikachu' },
          type: 'CUSTOM_HANDLED',
          name: 'TypeError',
        },
        target: error,
      });

      outputTestResponse({
        testName: `${testName}_500`,
        payload: compare,
        testType: 'COMPARE',
      });
      expect(compare.missingData?.length).toBe(0);
    });

    return 'Should return OK';
  });
});

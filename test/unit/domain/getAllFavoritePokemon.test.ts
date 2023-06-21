/* eslint-disable camelcase */
import outputTestResponse from '../../utils/outputTestResponse';
import compareJsons from '../../utils/compareJsons';
import ErrorHandler from '../../../src/common/utils/errorHandler/ErrorHandler';
import getAllFavoritePokemonDomain from '../../../src/domain/myPokemons/index';
import {
  getAllFavoritePokemonOutput200,
  getAllFavoritePokemonOutput404,
  getAllFavoritePokemonOutput500,
} from '../../mocks/outputs/domain/getAllFavoritePokemonMocks';
import {
  getAllFavoritePokemonInput200,
  getAllFavoritePokemonInput404,
} from '../../mocks/inputs/domain/getAllFavoritePokemonMocks';
/* eslint-disable no-console */

const testName = 'getAllFavoritePokemon';

describe(`UNIT - Domain - ${testName}`, () => {
  it('Get - 200', async () => {
    const response = await getAllFavoritePokemonDomain(
      getAllFavoritePokemonInput200
    );

    outputTestResponse({
      testName: `${testName}_200`,
      payload: response,
      testType: 'TEST',
    });

    // regression test
    const compare = compareJsons({
      expected: getAllFavoritePokemonOutput200,
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
    const response = await getAllFavoritePokemonDomain(
      getAllFavoritePokemonInput404
    );

    outputTestResponse({
      testName: `${testName}_404`,
      payload: response,
      testType: 'TEST',
    });

    const compare = compareJsons({
      expected: getAllFavoritePokemonOutput404,
      target: response,
    });

    outputTestResponse({
      testName: `${testName}_404`,
      payload: compare,
      testType: 'COMPARE',
    });

    expect(compare.missingData?.length).toBe(0);

    return 'Should return OK';
  });

  it('Get - 500', async () => {
    await getAllFavoritePokemonDomain(
      getAllFavoritePokemonInput200,
      true
    ).catch((error) => {
      expect(error instanceof ErrorHandler).toBeTruthy();
      expect(error.status).toBe(500);
      expect(error.layer).toBe('DOMAIN#GET_ALL_FAVORITES_POKEMON_FAILED');

      const compare = compareJsons({
        expected: getAllFavoritePokemonOutput500,
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

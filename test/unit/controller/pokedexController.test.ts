/* eslint-disable camelcase */
import outputTestResponse from '../../utils/outputTestResponse';
import compareJsons from '../../utils/compareJsons';
import ErrorHandler from '../../../src/common/utils/errorHandler/ErrorHandler';
import pokedexController from '../../../src/controller/pokedex/index';
import {
  pokedexControllerInput200,
  pokedexControllerInput404,
} from '../../mocks/inputs/controller/pokedexControllerMocks';
import {
  pokedexControllerOutput200,
  pokedexControllerOutput404,
  pokedexControllerOutput500,
} from '../../mocks/outputs/controller/pokedexController';
/* eslint-disable no-console */

const testName = 'pokedexController';

describe(`UNIT - Controller - ${testName}`, () => {
  it('Get - 200', async () => {
    const response = await pokedexController(pokedexControllerInput200);

    outputTestResponse({
      testName: `${testName}_200`,
      payload: response,
      testType: 'TEST',
    });

    // regression test
    const compare = compareJsons({
      expected: pokedexControllerOutput200,
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
    const response = await pokedexController(pokedexControllerInput404);

    outputTestResponse({
      testName: `${testName}_404`,
      payload: response,
      testType: 'TEST',
    });

    const compare = compareJsons({
      expected: pokedexControllerOutput404,
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
    await pokedexController(pokedexControllerInput200, true).catch((error) => {
      expect(error instanceof ErrorHandler).toBeTruthy();
      expect(error.status).toBe(500);
      expect(error.layer).toBe('CONTROLLER#GET_POKEDEX_INFO_FAILED');

      const compare = compareJsons({
        expected: pokedexControllerOutput500,
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

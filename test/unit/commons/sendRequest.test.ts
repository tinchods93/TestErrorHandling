import outputTestResponse from '../../utils/outputTestResponse';
import sendRequestService from '../../../src/common/services/sendRequest';
import config from '../../../config';
import eHttpMethods from '../../../src/common/enums/httpMethods';
import sendRequest200OkOutput from '../../mocks/outputs/unit/commons/sendRequest/sendRequest200Ok.json';
import { customErrorExpected } from '../../mocks/outputs/unit/commons/sendRequest/customErrorSendRequest';
import compareJsons from '../../utils/compareJsons';
/* eslint-disable no-console */

describe('UNIT - Commons - SendRequest', () => {
  it('Send request - 200', async () => {
    const response = await sendRequestService({
      url: config.pokemonService.getPokemonByName.replace(':name', 'pikachu'),
      method: eHttpMethods.GET,
    });

    outputTestResponse({
      testName: 'SendRequest_200',
      payload: response,
      testType: 'TEST',
    });

    // regression test
    const compare = compareJsons({
      expected: sendRequest200OkOutput,
      target: response,
    });

    outputTestResponse({
      testName: 'SendRequest_200',
      payload: compare,
      testType: 'COMPARE',
    });

    expect(compare.missingData?.length).toBe(0);

    return 'Should return OK';
  });

  it('Send request - 404', async () => {
    await sendRequestService({
      url: config.pokemonService.getPokemonByName.replace(':name', 'pikaachu'),
      method: eHttpMethods.GET,
    }).catch((error) => {
      const compare = compareJsons({
        expected: customErrorExpected,
        target: error,
      });

      outputTestResponse({
        testName: 'SendRequest_404',
        payload: compare,
        testType: 'COMPARE',
      });
      expect(compare.missingData?.length).toBe(0);
    });

    return 'Should return OK';
  });
});

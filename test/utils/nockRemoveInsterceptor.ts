import nock from 'nock';

const nockRemoveInsterceptor = (interceptor) => {
  nock.removeInterceptor(interceptor);
};
export default nockRemoveInsterceptor;

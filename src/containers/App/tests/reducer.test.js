process.env.REACT_APP_BUILD_NUMBER = 123;
process.env.REACT_APP_DEPLOYMENT_ENV = 'test';

jest.resetModules();
const appReducer = require('../reducer').default;

const initialState = {
  buildInformation: {
    frontEndBuildNumber: process.env.REACT_APP_BUILD_NUMBER,
    deploymentEnvironment: process.env.REACT_APP_DEPLOYMENT_ENV,
  },
  sampleData: [],
  sampleErrorMessage: '',
};

describe('appReducer', () => {
  it('returns the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(initialState);
  });
});

import type {AppState} from './types';
import {GET_SAMPLE_DATA_SUCCESS, GET_SAMPLE_DATA_ERROR_MESSAGE} from './constants';

const initialState: AppState = {
  buildInformation: {
    frontEndBuildNumber: process.env.REACT_APP_BUILD_NUMBER,
    deploymentEnvironment: process.env.REACT_APP_DEPLOYMENT_ENV,
  },
  sampleData: [],
  sampleErrorMessage: '',
};

const app = (state: AppState = initialState, action): AppState => {
  const {type} = action;
  switch (type) {
    case GET_SAMPLE_DATA_SUCCESS:
    {
      return {...state, sampleData: action.data};
    }
    case GET_SAMPLE_DATA_ERROR_MESSAGE:
    {
      return {...state, sampleErrorMessage: action.errorMessage};
    }
    default:
      return state;
  }
};

export default app;

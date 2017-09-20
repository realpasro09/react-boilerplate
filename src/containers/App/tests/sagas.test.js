import { put, takeLatest } from 'redux-saga/effects';
import { GET_SAMPLE_DATA } from '../constants';
import { getSampleDataSuccess, getSampleDataError } from '../actions';
import { getSampleData, fetchGetSampleData } from '../sagas';
jest.mock('../../../services/sampleService');

describe('fetchSampleData Saga', () => {
  let fetchSampleGenerator;

  beforeEach(() => {
    fetchSampleGenerator = fetchGetSampleData();
    fetchSampleGenerator.next();
  });

  it('should dispatch the getSampleDataSuccess action if it requests the data successfully', () => {
    const response = {
      sampleData: [],
    };
    const putDescriptor = fetchSampleGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(getSampleDataSuccess(response)));
  });

  it('should call the getSampleDataError action if the response errors', () => {
    const response = 'Fetch Error';
    const putDescriptor = fetchSampleGenerator.throw(response).value;

    expect(putDescriptor).toEqual(put(getSampleDataError(response)));
  });
});

describe('getCountries Saga', () => {
  const getSampleDataSaga = getSampleData();

  it('should start task to watch for GET_SAMPLE_DATA action', () => {
    const takeLatestDescriptor = getSampleDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(GET_SAMPLE_DATA, fetchGetSampleData));
  });
});

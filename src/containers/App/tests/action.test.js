import * as actions from '../actions';
import * as constants from '../constants';

describe('App actions', () => {
  it('has a type of GET_SAMPLE_DATA', () => {
    const expected = {
      type: constants.GET_SAMPLE_DATA,
    };
    expect(actions.getSampleData()).toEqual(expected);
  });
  it('has a type of GET_SAMPLE_DATA_SUCCESS', () => {
    const expected = {
      type: constants.GET_SAMPLE_DATA_SUCCESS,
    };
    expect(actions.getSampleDataSuccess()).toEqual(expected);
  });
  it('has a type of GET_SAMPLE_DATA_ERROR_MESSAGE', () => {
    const expected = {
      type: constants.GET_SAMPLE_DATA_ERROR_MESSAGE,
      errorMessage: 'error',
    };
    expect(actions.getSampleDataError('error')).toEqual(expected);
  });
});

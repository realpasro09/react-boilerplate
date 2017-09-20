import { put, takeLatest } from 'redux-saga/effects';
import { GET_SAMPLE_DATA } from './constants';
import { getSampleDataSuccess, getSampleDataError } from './actions';
import SampleService from '../../services/sampleService';

export function* fetchGetSampleData() {
    try {
        const sampleService = new SampleService();
        const sampleData = yield sampleService.getSampleData();
        yield put(getSampleDataSuccess(sampleData));
    } catch (err) {
        yield put(getSampleDataError('Fetch Error'));
    }
}

export function* getSampleData() {
    yield takeLatest(GET_SAMPLE_DATA, fetchGetSampleData);
}

export default [
    getSampleData,
];
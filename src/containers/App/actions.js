import * as ActionTypes from './constants';

export function getSampleData() {
	return {
		type: ActionTypes.GET_SAMPLE_DATA,
	};
}

export function getSampleDataSuccess(data) {
	return {
		type: ActionTypes.GET_SAMPLE_DATA_SUCCESS,
		data,
	};
}

export function getSampleDataError(errorMessage) {
	return {
		type: ActionTypes.GET_SAMPLE_DATA_ERROR_MESSAGE,
		errorMessage,
	};
}

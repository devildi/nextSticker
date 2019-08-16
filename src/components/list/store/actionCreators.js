import * as constants from './constants';

export const test = (data) => ({
	type: constants.TEST,
	data: data
});
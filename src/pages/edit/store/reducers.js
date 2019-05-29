import * as constants from './constants'

const defaultState = {
	text: 0
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.TEST:
			return {...state, text: state.text+action.data};
		default:
			return state;
	}
}
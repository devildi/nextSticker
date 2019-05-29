import * as constants from './constants'

const defaultState = {
	isOpen: false
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SWITCH:
			return {...state, isOpen: !state.isOpen};
		default:
			return state;
	}
}
import * as constants from './constants'

const defaultState = {

}

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.LOCATION:
			return state;
		default:
			return state;
	}
}
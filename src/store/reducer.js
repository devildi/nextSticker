import { combineReducers } from 'redux'
import { reducer as appbarReducer } from '../components/appbar/store'
import { reducer as sidebarReducer } from '../components/sidebar/store'

export default combineReducers({
	appbarReducer,
	sidebarReducer
})
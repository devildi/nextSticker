import { take, call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects'
//import Api from '...'
import { constants } from '../pages/map/store'

function* watchText(action){
	while(true){
		const action= yield take(constants.TEST)
		console.log(action)
    yield put(action)
  }
}


export default function* mySaga (){
	console.log('begin!')
	yield fork(watchText)
}
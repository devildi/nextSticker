import { all, take, call, put, takeEvery, takeLatest, fork } from 'redux-saga/effects'
import { actionCreators } from '../components/sidebar/store'

function * watchUsername(){
  while(true){
    const action= yield take('TO_LOGIN_IN');
    yield put(actionCreators.switchBar());
  }
}


export default function* mySaga (){
	yield all([
    fork(watchUsername),
  ]);
}
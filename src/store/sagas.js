import * as api from '../api'
import {apiError, apiSuccess, sagaRequest} from './actions'
import { call, put, takeEvery } from 'redux-saga/effects'



export function* helloSaga() {
    console.log('Hello Sagas!');
    // yield 'Hello Sagas!'
}

export function* testLogin(action) {

    try {
        const res = yield call(api.login, action.data)
        console.log(res, 'res login')
        yield put(apiSuccess(res.user))
        yield alert(`欢迎：${res.user.username}`)
        // return res.user
    } catch (err) {
        console.log(err, 'err login')
        yield put(apiError(err))
    }
}


function* watchLogin() {
    yield takeEvery('sagaRequest', testLogin)
}

export default function* rootSaga() {
    yield watchLogin()
}

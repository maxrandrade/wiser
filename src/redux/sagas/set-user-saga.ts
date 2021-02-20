import { put, call, takeEvery } from 'redux-saga/effects'
import { setUser } from '../actions'
import { auth } from '../../api'
import { SET_USER_REQUEST } from '../action-types'

export function* doLogin (action: any) {
  try {
    const response = yield call(auth, action.payload)
    const parsedData = response?.data && JSON.parse(response.data)

    yield put(setUser(parsedData))
  } catch (error) {
    console.log(error)
  }
}

export function* watchDoLogin () {
  yield takeEvery(SET_USER_REQUEST, doLogin)
}

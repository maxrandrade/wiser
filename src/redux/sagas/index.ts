import { all } from 'redux-saga/effects'
import { watchDoLogin } from './set-user-saga'

export function* rootSaga () {
  yield all([watchDoLogin()])
}

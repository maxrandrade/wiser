import { combineReducers } from 'redux'
import { userReducer } from './user-reducer'
import { modalReducer } from './modal-reducer'

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
})

export default rootReducer

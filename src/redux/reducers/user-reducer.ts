import { SET_USER } from '../action-types'

const initialState = {
  userId: '',
  username: '',
}

export const userReducer = (state: any = initialState, action: any) => {
  switch(action.type) {
    case SET_USER:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

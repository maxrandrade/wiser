import { SET_USER } from '../action-types'

const initialState: UserData = {
  userId: '',
  username: '',
}

export const userReducer = (state: UserData = initialState, action: any) => {
  switch(action.type) {
    case SET_USER:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export interface UserData {
  userId: string,
  username: string,
}

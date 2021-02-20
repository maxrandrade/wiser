import { SET_USER, SET_USER_REQUEST } from '../action-types'

export const setUser = (payload: any) => ({
  type: SET_USER,
  payload,
})

export const setUserRequest = (payload: any) => ({
  type: SET_USER_REQUEST,
  payload,
})

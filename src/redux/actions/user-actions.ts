import { FormData } from '../../components/Form'
import { SET_USER, SET_USER_REQUEST } from '../action-types'

export const setUser = (payload: FormData) => ({
  type: SET_USER,
  payload,
})

export const setUserRequest = (payload: FormData) => ({
  type: SET_USER_REQUEST,
  payload,
})

import { FormData } from '../components/Form'
import { CLOSE_MODAL, OPEN_MODAL, SET_USER, SET_USER_REQUEST } from './action-types'

export interface LoginAction {
  payload: FormData
  type: typeof SET_USER | typeof SET_USER_REQUEST
}

export interface ModalAction {
  payload: FormData
  type: typeof OPEN_MODAL | typeof CLOSE_MODAL
}


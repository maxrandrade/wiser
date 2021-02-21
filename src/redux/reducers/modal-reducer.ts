import { OPEN_MODAL, CLOSE_MODAL } from '../action-types'
import { ModalAction } from '../redux-types'

const initialState: ModalData = {
  isOpen: false,
}

export const modalReducer = (state: ModalData = initialState, action: ModalAction) => {
  switch(action.type) {
    case OPEN_MODAL:
      return { ...state, isOpen: true }
    case CLOSE_MODAL:
      return { ...state, isOpen: false}
    default:
      return state
  }
}

export interface ModalData {
  isOpen: boolean
}

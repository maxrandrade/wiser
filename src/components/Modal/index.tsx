import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../../redux/actions'
import { Dialog, Text, Close } from './style'
import strings from '../../strings'

const { successLoginMessage } = strings.pages.login

const Modal: React.FC<ModalProps> = ({ modal, user, handleClose }) => {

  return (
    <Dialog isOpen={modal.isOpen}>
      <Text>{successLoginMessage}, {user?.username}!</Text>
      <Close type="button" onClick={handleClose}>&#215;</Close>
    </Dialog>
  )
}

export interface ModalProps {
  user: UserProps,
  modal: DialogProps,
  handleClose(): void
}

export interface DialogProps {
  isOpen: boolean
}

export interface UserProps {
  username: string,
  userId: string
}

const mapStateToProps = ({ user, modal }) => ({
  user,
  modal,
})

const mapDispatchToProps = dispatch => ({
  handleClose: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)

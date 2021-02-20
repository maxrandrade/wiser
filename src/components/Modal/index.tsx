import React from 'react'
import { Dialog, Text, Close } from './style'
import strings from '../../strings'

const { successLoginMessage } = strings.pages.login

const Modal: React.FC<ModalProps> = ({ username }) => {
  const hasUserInfo = !!username
  const [isOpen, setIsOpen] = React.useState<boolean>(hasUserInfo)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <Dialog isOpen={isOpen}>
      <Text>{successLoginMessage}, {username}!</Text>
      <Close type="button" onClick={handleClose}>&#215;</Close>
    </Dialog>
  )
}

export interface ModalProps {
  username: string
}

export interface DialogProps {
  isOpen: boolean
}

export default Modal

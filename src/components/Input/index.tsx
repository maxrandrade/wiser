import React from 'react'
import { Label, InputWrapper, StyledInput, ErrorIcon, ErrorMessage } from './style'

const Input: React.FC<InputProps> = ({ label, name, type, teste, error }) => {
  const hasError = !!error

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <InputWrapper>
        <StyledInput
          name={name}
          id={name}
          type={type}
          ref={teste}
          hasError={hasError}
        />
        <ErrorIcon hasError={hasError}>&#215;</ErrorIcon>
      </InputWrapper>
      <ErrorMessage>{error?.message}</ErrorMessage>
    </>
  )
}

export interface InputProps {
  label: string
  name: string
  type: InputTypes
  teste: any
  error: any
}

export enum InputTypes {
  Email = 'email',
  Password = 'password',
}

export default Input

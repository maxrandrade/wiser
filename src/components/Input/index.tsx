import React from 'react'
import { FieldError } from 'react-hook-form'
import { Label, InputWrapper, StyledInput, ErrorIcon, ErrorMessage } from './style'

const Input: React.FC<InputProps> = ({ label, name, type, reference, error }) => {
  const hasError = !!error

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <InputWrapper>
        <StyledInput
          name={name}
          id={name}
          type={type}
          ref={reference}
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
  error: FieldError
  reference: any
}

export interface ErrorProps {
  hasError: boolean
}

export enum InputTypes {
  Email = 'email',
  Password = 'password',
}

export default Input

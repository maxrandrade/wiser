import React from 'react'
import Button, { ButtonTypes } from '../Button'
import Input, { InputTypes } from '../Input'
import strings from '../../strings'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { setUserRequest } from '../../redux/actions'
import { connect } from 'react-redux'

const { button, errors: { emptyEmail, invalidEmail, emptyPassword } } = strings.pages.login

const inputFields: InputFieldInterface[] = [
  {
    label: 'E-mail',
    name: 'email',
    type: InputTypes.Email,
  },
  {
    label: 'Senha',
    name: 'password',
    type: InputTypes.Password,
  }
]

const schema = yup.object().shape({
  email: yup.string().required(emptyEmail).email(invalidEmail),
  password: yup.string().required(emptyPassword),
});

const Form: React.FC<FormProps> = ({ setUserRequest }) => {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    setUserRequest(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputFields.map(({ label, name, type }, key: number) => (
        <Input
          label={label}
          name={name}
          type={type}
          key={key}
          reference={register}
          error={errors[name]}
        />
      ))}
      <Button label={button} type={ButtonTypes.Submit}/>
    </form>
  )
}

export default connect(null, {setUserRequest})(Form)

interface FormProps {
  setUserRequest: (payload: FormData) => void
}

interface InputFieldInterface {
  label: string
  name: string
  type: InputTypes
}

export interface FormData {
  email: string
  password: string
}

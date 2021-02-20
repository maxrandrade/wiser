import { StyledButton } from './style'

const Button: React.FC<ButtonProps> = ({ label, type }) => {
  return <StyledButton type={type}>{label}</StyledButton>
}

interface ButtonProps {
  label: string
  type: ButtonTypes
}

export enum ButtonTypes {
  Submit = 'submit',
  Button = 'button',
}

export default Button

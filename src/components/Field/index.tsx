import { Label, Input } from './style'

interface FieldProps {
  label: string
  type: string
}

const Field: React.FC<FieldProps> = ({ label, type }) => {
  return (
    <>
      <Label>{label}</Label>
      <Input type={type} />
    </>
  )
}

export default Field

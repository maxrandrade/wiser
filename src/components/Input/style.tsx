import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  margin: 8px 0px 8px 11px;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: 14px;
  text-transform: uppercase;
`

export const InputWrapper = styled.div`
  position: relative;
`

export const StyledInput = styled.input<any>`
  display: block;
  margin: 8px 0px 16px;
  padding: 16px;
  border: 1px solid;
  border-color: ${({ theme, hasError }) => hasError ? theme.colors.error : theme.colors.primary};
  border-radius: 8px;
  background-color: transparent;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  outline: none;
  width: 100%;
`

export const ErrorIcon = styled.span<any>`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 17px;
  color: ${({ theme, hasError }) => hasError ? theme.colors.error : 'blue'};
  display: ${({ hasError }) => hasError ? 'block' : 'none'};
`

export const ErrorMessage = styled.p`
  padding: 0px 16px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: 14px;
`

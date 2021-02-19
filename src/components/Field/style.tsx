import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  margin: 8px 0px 8px 11px;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: 14px;
  text-transform: uppercase;
`

export const Input = styled.input`
  display: block;
  margin: 8px 0px 16px;
  padding: 16px;
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  border-radius: 8px;
  background-color: transparent;
  font-family: Montserrat, sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  outline: none;
  width: 100%;

  @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
    &:last-of-type {
      margin-bottom: 34px;
    }
  }
`

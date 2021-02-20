import styled from 'styled-components'
import { DialogProps } from '.'

export const Dialog = styled.div<DialogProps>`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 20px;
  border-radius: 8px;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.success};
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  align-items: center;
`

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.md};
  text-align: center;
`

export const Close = styled.button`
  padding: 10px;
  margin-left: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  line-height: 20px;
  cursor: pointer;
`

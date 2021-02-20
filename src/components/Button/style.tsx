import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => `linear-gradient(267.79deg, ${theme.colors.secondaryGradientStart} 0%, ${theme.colors.secondaryGradientEnd} 99.18%)`};
  box-shadow: ${({ theme }) => `0px 10px 25px ${theme.colors.shadow}`};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: 600;
  font-family: inherit;
  text-align: center;
  width: 100%;
  outline: none;
  cursor: pointer;
  margin: 24px 0;

  @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
    position: absolute;
    left: 0;
    right: 0;
    max-width: 170px;
    margin: 0 auto;
    box-shadow: none;
  }
`

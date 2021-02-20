import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, auto) minmax(auto, 600px);
  height: 100vh;
  position: relative;

  @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: auto;
  }
`

export const Background = styled.div`
  background-image: ${({ theme }) => {
    return `linear-gradient(0deg, ${theme.colors.gradientStart} 0%, ${theme.colors.gradientEnd} 100%), url('/img/loginBG.jpeg')`
  }};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
    background-image: ${({ theme }) => {
      return `linear-gradient(0deg, ${theme.colors.gradientStart} 55%, ${theme.colors.gradientEnd} 100%), url('/img/loginBG.jpeg')`
    }};
    background-size: contain;
    background-position: top;
    background-color: ${({ theme }) => theme.colors.gradientStart};
  }
`

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.surface};

  @media(max-width: ${({ theme }) => theme.breakpoints.large}) {
    justify-content: center;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    border-radius: 8px;
    padding: 24px 26px;
    justify-content: center;
    min-width: 310px;
  }
`

export const Login = styled.div`
  max-width: 256px;
  margin-left: 112px;

  @media(max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-left: 0;
    max-width: 300px;
  }
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xlg};
  font-weight: 400;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
  max-width: 256px;
  @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: ${({ theme }) => theme.fontSize.lg};
    line-height: 32px;
    text-align: center;
    max-width: 140px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 43px;
  max-width: 256px;
  @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
    text-align: center;
    max-width: 100%;
    margin-bottom: 20px;
  }
`

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 256px;

  a {
    color: ${({ theme }) => theme.colors.link};;
  }

  @media(max-width: ${({ theme }) => theme.breakpoints.medium}) {
    position: absolute;
    bottom: -90px;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 220px;
    color: ${({ theme }) => theme.colors.white};

    a {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`


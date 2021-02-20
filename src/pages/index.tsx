import Head from 'next/head'
import { Container, Background, LoginContainer, Login, Subtitle, Text, Title } from '../styles/pages/Login'
import strings from '../strings'
import Form from '../components/Form'

const { pageTitle, title, subtitle, forgotPassword, forgotPasswordLink } = strings.pages.login

const LoginPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Container>
        <Background />
        <LoginContainer>
          <Login>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Form />
            <Text>{forgotPassword} <a href="#">{forgotPasswordLink}</a></Text>
          </Login>
        </LoginContainer>
      </Container>
    </>
  )
}

export default LoginPage

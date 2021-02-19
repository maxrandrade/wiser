import Head from 'next/head'
import { Container, Background, LoginContainer, Login, Subtitle, Text, Title } from '../styles/pages/Login'
import Field from '../components/Field'
import strings from '../strings'
import Button from '../components/Button'

const { pageTitle, title, subtitle, forgotPassword, forgotPasswordLink } = strings.pages.login

const fields = [
  {
    label: 'E-mail',
    type: 'email',
  },
  {
    label: 'Senha',
    type: 'password',
  }
]

const LoginPage: React.FC = () => {
  return (
    <Container>
      <Background />
      <LoginContainer>
        <Login>
          <Head>
            <title>{pageTitle}</title>
          </Head>

          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          {fields.map(({ label, type }) => <Field label={label} type={type} />)}
          <Button />
          <Text>{forgotPassword} <a href="#">{forgotPasswordLink}</a></Text>
        </Login>
      </LoginContainer>
    </Container>
  )
}

export default LoginPage

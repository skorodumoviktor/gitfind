import { Redirect } from 'react-router-dom'
import { LoginProps } from '../../types'
import { Page } from '../layout'
import { LoginContainer, LoginLink } from './styled'

export function Login({ isLoggedIn, clientId, redirectUri }: LoginProps) {
  if (isLoggedIn) return <Redirect to="/" />

  const authUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${clientId}&redirect_uri=${redirectUri}`

  return (
    <Page>
      <LoginContainer>
        <LoginLink href={authUrl}>Login with GitHub</LoginLink>
      </LoginContainer>
    </Page>
  )
}

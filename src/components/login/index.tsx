import { LoginProps } from '../../types'
import { Page } from '../layout'
import { LoginContainer, LoginLink } from './styled'

export function Login({ clientId, redirectUri }: LoginProps) {
  const authUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${clientId}&redirect_uri=${redirectUri}`

  return (
    <Page>
      <LoginContainer>
        <LoginLink href={authUrl}>Login with GitHub</LoginLink>
      </LoginContainer>
    </Page>
  )
}

import { Redirect } from 'react-router-dom'
import { LoginComponentProps } from '../types'

export function LoginComponent({
  isLoggedIn,
  clientId,
  redirectUri,
}: LoginComponentProps) {
  if (isLoggedIn) return <Redirect to="/" />

  const authUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${clientId}&redirect_uri=${redirectUri}`

  return (
    <div>
      <a href={authUrl}>
        <span>Login with GitHub</span>
      </a>
    </div>
  )
}

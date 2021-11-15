import React from 'react'
import { api } from '../api'
import { AuthContext } from '../state/auth'
import { LoginControllerProps } from '../types'
import { useQuery } from '../utils'

export function LoginController({ children }: LoginControllerProps) {
  const {
    state: { isLoggedIn, redirectUri, clientId },
    setIsLoggedIn,
  } = React.useContext(AuthContext)

  const query = useQuery()

  const authenticate = React.useCallback(
    async (code: string) => {
      const isLoginSuccess = await api.authenticate(code)
      setIsLoggedIn(isLoginSuccess)
    },
    [setIsLoggedIn]
  )

  React.useEffect(() => {
    const code = query.get('code')

    if (code) authenticate(code)
  }, [query, authenticate])

  return children({ isLoggedIn, redirectUri, clientId })
}

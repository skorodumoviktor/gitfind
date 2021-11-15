import React from 'react'
import { api } from '../api'
import { AuthContext } from '../state'
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

  const code = React.useMemo(() => {
    return query.get('code')
  }, [query])

  React.useEffect(() => {
    if (code) authenticate(code)
  }, [code, authenticate])

  return children({ isLoggedIn, redirectUri, clientId })
}

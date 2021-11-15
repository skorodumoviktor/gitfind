import React from 'react'
import { AuthContext } from '../state'
import { HomeControllerProps } from '../types'

export function HomeController({ children }: HomeControllerProps) {
  const {
    state: { isLoggedIn },
  } = React.useContext(AuthContext)

  return children({
    isLoggedIn,
  })
}

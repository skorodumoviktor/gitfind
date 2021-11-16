import React from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../state'
import { HomeControllerProps } from '../types'

export function HomeController({ children }: HomeControllerProps) {
  const {
    state: { isLoggedIn },
  } = React.useContext(AuthContext)

  if (!isLoggedIn) return <Redirect to="/login" />

  return children()
}

import React from 'react'
import { useRepoCountQuery } from '../graphql'
import { AuthContext } from '../state/auth'
import { HomeControllerProps } from '../types'

export function HomeController({ children }: HomeControllerProps) {
  const {
    state: { isLoggedIn },
  } = React.useContext(AuthContext)

  const { data, loading } = useRepoCountQuery()

  return children({
    isLoggedIn,
    isLoading: loading,
    repoCount: data?.search.repositoryCount || 0,
  })
}

import { Redirect } from 'react-router-dom'
import { HomeComponentProps } from '../types'

export function HomeComponent({
  isLoggedIn,
  isLoading,
  repoCount,
}: HomeComponentProps) {
  if (!isLoggedIn) return <Redirect to="/login" />

  return <div>{repoCount}</div>
}

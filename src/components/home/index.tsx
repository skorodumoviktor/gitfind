import { Redirect } from 'react-router-dom'
import { HomeProps } from '../../types'
import { Page } from '../layout'
import { RepoSearch } from '../repo-search'
import { HomeContainer } from './styled'

export function Home({ isLoggedIn }: HomeProps) {
  if (!isLoggedIn) return <Redirect to="/login" />

  return (
    <Page>
      <HomeContainer>
        <RepoSearch />
      </HomeContainer>
    </Page>
  )
}

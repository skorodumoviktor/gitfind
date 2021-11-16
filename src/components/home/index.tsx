import { Backtop } from '../backtop'
import { Page } from '../layout'
import { RepoSearch } from '../repo-search'
import { HomeContainer } from './styled'

export function Home() {
  return (
    <Page>
      <HomeContainer>
        <RepoSearch />
        <Backtop />
      </HomeContainer>
    </Page>
  )
}

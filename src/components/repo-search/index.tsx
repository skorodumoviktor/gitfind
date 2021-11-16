import { debounce } from 'lodash'
import React from 'react'
import Loader from 'react-loader-spinner'
import { useTheme } from 'styled-components'
import { useRepoSearchLazyQuery } from '../../graphql'
import { Repo } from '../../types'
import { RepoList } from '../repo-list'
import { Container, Input, InputContainer, LoaderContainer } from './styled'

const DEBOUNCE_INPUT_MS = 500

export function RepoSearch() {
  const [inputValue, setInputValue] = React.useState<string>('')
  const [repoCount, setRepoCount] = React.useState<number>(0)
  const [repos, setRepos] = React.useState<Repo[]>([])

  const { colors } = useTheme()

  const [searchRepos, { loading: isLoading, data: repoSearchResponse }] =
    useRepoSearchLazyQuery()

  React.useEffect(() => {
    if (!repoSearchResponse || !repoSearchResponse.search.edges) {
      setRepos([])
      setRepoCount(0)
      return
    }

    // TODO properly map generated typings with what you use in application
    setRepos(repoSearchResponse.search.edges.map((edge) => edge?.node as Repo))
    setRepoCount(repoSearchResponse.search.repositoryCount)
  }, [repoSearchResponse])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchReposByQuery = React.useCallback(
    debounce(async (query: string) => {
      if (!query) {
        setRepos([])
        return
      }

      searchRepos({ variables: { query } })
    }, DEBOUNCE_INPUT_MS),
    []
  )

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setInputValue(value)
    fetchReposByQuery(value)
  }

  return (
    <Container>
      <InputContainer>
        <Input
          type="text"
          value={inputValue}
          onChange={onInputChange}
          placeholder="Start searching GitHub repositories..."
        />

        {isLoading && (
          <LoaderContainer>
            <Loader
              type="TailSpin"
              height={20}
              width={20}
              color={colors.body}
            />
          </LoaderContainer>
        )}
      </InputContainer>

      {inputValue && repos.length > 0 && (
        <RepoList totalCount={repoCount} repos={repos} />
      )}
    </Container>
  )
}

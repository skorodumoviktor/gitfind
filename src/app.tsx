import { useRepoSearchQuery } from './graphql'

export function App() {
  const { loading, error, data } = useRepoSearchQuery({
    variables: {
      queryString: 'react',
    },
  })

  console.log('yo')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  if (!data) return <p>Empty data</p>

  return <>{data.search.repositoryCount}</>
}

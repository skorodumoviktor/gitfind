import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'

const httpLink = new HttpLink({ uri: '/api/graphql' })

const authMiddleware = new ApolloLink((operation, forward) => {
  const accessToken = localStorage.getItem('accessToken')

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${accessToken}`,
    },
  }))

  return forward(operation)
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
})

export { client }

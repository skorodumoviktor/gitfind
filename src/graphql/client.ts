import { ApolloClient, InMemoryCache } from '@apollo/client'

const GRAPHQL_SERVER_URI = 'https://48p1r2roz4.sse.codesandbox.io'

const client = new ApolloClient({
  uri: GRAPHQL_SERVER_URI,
  cache: new InMemoryCache(),
})

export { client }

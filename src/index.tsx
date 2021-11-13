import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { client } from './graphql/client'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

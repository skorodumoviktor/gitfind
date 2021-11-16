import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components'
import { Home } from './components/home'
import { Login } from './components/login'
import { HomeController } from './controllers/home'
import { LoginController } from './controllers/login'
import { AuthContextProvider } from './state'
import { Header } from './components/header'
import { device } from './utils'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const theme: DefaultTheme = {
  colors: {
    body: '#5a6270',
    link: '#58a6ff',
    linkHover: '#4572c9',
    border: '#dee2e7',
    yellow: '#F0E68C',
  },
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    color: ${(props) => props.theme.colors.body};
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 16px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      -webkit-appearance: none;
      border-radius: 2px;
      background-color: ${(props) => props.theme.colors.border};
    }
    @media ${device.mobile} {
      font-size: 14px;
    }
  }
  input[type="text"] {
    font-size: 16px;
  }
  h1 {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  small {
    font-size: 0.75em;
  }
`

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthContextProvider>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeController>{(props) => <Home {...props} />}</HomeController>
            </Route>

            <Route path="/login">
              <LoginController>
                {(props) => <Login {...props} />}
              </LoginController>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

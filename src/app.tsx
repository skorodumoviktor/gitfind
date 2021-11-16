import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Home } from './components/home'
import { Login } from './components/login'
import { HomeController } from './controllers/home'
import { LoginController } from './controllers/login'
import { AuthContextProvider } from './state'
import { Header } from './components/header'
import { GlobalStyle, theme } from './styles'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthContextProvider>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeController>{() => <Home />}</HomeController>
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

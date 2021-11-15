import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomePage } from './pages/home'
import { LoginPage } from './pages/login'
import { AuthContextProvider } from './state/auth'

export function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  )
}

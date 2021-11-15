import { LoginComponent } from '../components/login'
import { LoginController } from '../controllers/login'

export function LoginPage() {
  return (
    <LoginController>
      {(props) => <LoginComponent {...props} />}
    </LoginController>
  )
}

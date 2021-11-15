import { HomeComponent } from '../components/home'
import { HomeController } from '../controllers/home'

export function HomePage() {
  return (
    <HomeController>{(props) => <HomeComponent {...props} />}</HomeController>
  )
}

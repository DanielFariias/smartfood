import type { NextPage } from 'next'
import { DeliveryManLayout } from '../components/Layouts/DeliveryManLayout'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HomeLayout } from '../components/Layouts/HomeLayout'
import LoginLayout from '../components/Layouts/LoginLayout'
import { useHomeLayout } from '../context/HomeLayoutContext'
import * as C from '../styles/home.styles'


const Home: NextPage = () => {
  const context = useHomeLayout()

  const handleLayout = () => {
    switch (context.state) {
      case "DeliveryManLayout":
        return <DeliveryManLayout />
      case "LoginLayout":
        return <LoginLayout />
      case "HomeLayout":
        return <HomeLayout />
    }
  }

  return (
    <C.Container>
      <header>
        <Header />
      </header>

      <main>
        {
          handleLayout()
        }
      </main>

      <footer>
        <Footer />
      </footer>
    </C.Container>
  )
}

export default Home

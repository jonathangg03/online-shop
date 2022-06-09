import { useLocation } from 'react-router-dom'
import Menu from '../Menu'
import Header from '../Header'

const TITLES = {
  home: 'Inicio',
  liked: 'Te gustó',
  search: 'Búsqueda',
  cart: 'Carrito'
}

const titlesKeys = Object.keys(TITLES)

const Layout = ({ children }) => {
  const location = useLocation()
  const path = location.pathname

  return (
    <>
      <Header title={TITLES[titlesKeys.find((el) => path.includes(el))]} />
      <main>
        {children}
        <Menu />
      </main>
    </>
  )
}

export default Layout

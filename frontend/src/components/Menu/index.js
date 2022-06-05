import { MdHome } from 'react-icons/md'
import { FaHeart, FaShoppingBasket, FaSearch } from 'react-icons/fa'
import { Menu } from './styles'
import { useLocation } from 'react-router-dom'

const MenuComponent = () => {
  const location = useLocation()

  return (
    <nav>
      <Menu>
        <li
          className={location.pathname === '/' ? 'selected' : ''}
          title='home'
        >
          <a href='./index.html'>
            <MdHome />
          </a>
        </li>
        <li
          className={location.pathname === '/liked' ? 'selected' : ''}
          title='like'
        >
          <a href='./liked.html'>
            <FaHeart />
          </a>
        </li>
        <li
          className={location.pathname === '/search' ? 'selected' : ''}
          title='search'
        >
          <a href='./search.html'>
            <FaSearch />
          </a>
        </li>
        <li
          className={location.pathname === '/cart' ? 'selected' : ''}
          title='cart'
        >
          <a href='./cart.html'>
            <FaShoppingBasket />
          </a>
        </li>
      </Menu>
    </nav>
  )
}

export default MenuComponent

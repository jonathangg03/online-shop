import { MdHome } from 'react-icons/md'
import { FaHeart, FaShoppingBasket, FaSearch } from 'react-icons/fa'
import { Menu } from './styles'
import { Link, useLocation } from 'react-router-dom'

const MenuComponent = () => {
  const location = useLocation()

  return (
    <nav>
      <Menu>
        <li
          className={location.pathname === '/' ? 'selected' : ''}
          title='home'
        >
          <Link to='/'>
            <MdHome />
          </Link>
        </li>
        <li
          className={location.pathname === '/liked' ? 'selected' : ''}
          title='like'
        >
          <Link to='./liked'>
            <FaHeart />
          </Link>
        </li>
        <li
          className={location.pathname === '/search' ? 'selected' : ''}
          title='search'
        >
          <Link to='./search'>
            <FaSearch />
          </Link>
        </li>
        <li
          className={location.pathname === '/cart' ? 'selected' : ''}
          title='cart'
        >
          <Link to='/cart'>
            <FaShoppingBasket />
          </Link>
        </li>
      </Menu>
    </nav>
  )
}

export default MenuComponent

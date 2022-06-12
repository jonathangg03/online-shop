import { MdHome } from 'react-icons/md'
import { FaHeart, FaSearch } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'
import { Menu } from './styles'
import { Link, useLocation } from 'react-router-dom'

const MenuComponent = () => {
  const location = useLocation()

  return (
    <nav>
      <Menu>
        <li
          className={location.pathname === '/home' ? 'selected' : ''}
          title='home'
        >
          <Link to='/home'>
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
            <IoCart />
          </Link>
        </li>
      </Menu>
    </nav>
  )
}

export default MenuComponent

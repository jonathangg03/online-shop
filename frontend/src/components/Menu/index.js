import { MdHome } from 'react-icons/md'
import { FaHeart, FaSearch } from 'react-icons/fa'
import { IoCart } from 'react-icons/io5'
import { Menu } from './styles'
import { useLocation, useNavigate } from 'react-router-dom'

const MenuComponent = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavigate = (event) => {
    let buttonId
    if (event.target.tagName === 'path') {
      const svg = event.target.parentNode
      const button = svg.parentNode
      buttonId = button.id
    }
    if (event.target.tagName === 'svg') {
      const button = event.target.parentNode
      buttonId = button.id
    }
    if (event.target.tagName === 'BUTTON') {
      buttonId = event.target.id
    }

    switch (buttonId) {
      case 'home':
        navigate('/home')
        break
      case 'liked':
        navigate('/liked')
        break
      case 'search':
        navigate('/search')
        break
      case 'cart':
        navigate('/cart')
        break
    }
  }

  return (
    <nav>
      <Menu>
        <li>
          <button
            className={location.pathname === '/home' ? 'selected' : ''}
            title='home'
            id='home'
            type='button'
            onClick={handleNavigate}
          >
            <MdHome aria-disabled />
          </button>
        </li>
        <li>
          <button
            className={location.pathname === '/liked' ? 'selected' : ''}
            title='liked'
            id='liked'
            type='button'
            onClick={handleNavigate}
          >
            <FaHeart />
          </button>
        </li>
        <li>
          <button
            className={location.pathname === '/search' ? 'selected' : ''}
            title='search'
            id='search'
            type='button'
            onClick={handleNavigate}
          >
            <FaSearch />
          </button>
        </li>
        <li>
          <button
            className={location.pathname === '/cart' ? 'selected' : ''}
            title='cart'
            id='cart'
            type='button'
            onClick={handleNavigate}
          >
            <IoCart />
          </button>
        </li>
      </Menu>
    </nav>
  )
}

export default MenuComponent

import { Menu } from './styles'
import { FaHeart, FaShoppingBasket, FaSearch } from 'react-icons/fa'
import { MdHome } from 'react-icons/md'

const MenuComponent = () => {
  return (
    <nav>
      <Menu>
        <li className='selected' title='home'>
          <a href='./index.html'>
            <MdHome />
          </a>
        </li>
        <li title='like'>
          <a href='./liked.html'>
            <FaHeart />
          </a>
        </li>
        <li title='search'>
          <a href='./search.html'>
            <FaSearch />
          </a>
        </li>
        <li title='cart'>
          <a href='./cart.html'>
            <FaShoppingBasket />
          </a>
        </li>
      </Menu>
    </nav>
  )
}

export default MenuComponent

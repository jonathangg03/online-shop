import { Categories, Item } from './styles'
import { FaThLarge, FaTshirt } from 'react-icons/fa'
import { GiRunningShoe } from 'react-icons/gi'
import { BsSmartwatch } from 'react-icons/bs'

const CategoriesComponent = () => {
  return (
    <Categories className='categories'>
      <Item className='selected'>
        <FaThLarge />
        <p>Todo</p>
      </Item>
      <Item className='categories__item'>
        <GiRunningShoe />
        <p>Calzado</p>
      </Item>
      <Item className='categories__item'>
        <BsSmartwatch />
        <p>Relojes</p>
      </Item>
      <Item className='categories__item'>
        <FaTshirt />
        <p>Ropa</p>
      </Item>
    </Categories>
  )
}

export default CategoriesComponent

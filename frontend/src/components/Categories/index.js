import { FaThLarge, FaTshirt } from 'react-icons/fa'
import { GiRunningShoe } from 'react-icons/gi'
import { BsSmartwatch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import changeCategory from '../../utils/changeCategory'
import { Categories, Item } from './styles'

const CategoriesComponent = () => {
  const navigate = useNavigate()

  return (
    <Categories className='categories'>
      <Item
        className='selected'
        onClick={(event) => changeCategory({ event, navigate })}
      >
        <FaThLarge />
        <p>Todo</p>
      </Item>
      <Item
        className='categories__item'
        id={0}
        onClick={(event) => changeCategory({ event, navigate })}
      >
        <GiRunningShoe />
        <p>Calzado</p>
      </Item>
      <Item
        className='categories__item'
        id={1}
        onClick={(event) => changeCategory({ event, navigate })}
      >
        <BsSmartwatch />
        <p>Relojes</p>
      </Item>
      <Item
        className='categories__item'
        id={2}
        onClick={(event) => changeCategory({ event, navigate })}
      >
        <FaTshirt />
        <p>Ropa</p>
      </Item>
    </Categories>
  )
}

export default CategoriesComponent

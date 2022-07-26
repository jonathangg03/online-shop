import { FaThLarge, FaTshirt } from 'react-icons/fa'
import { GiRunningShoe } from 'react-icons/gi'
import { BsSmartwatch } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom'
import changeCategory from '../../utils/changeCategory'
import { Categories, Item } from './styles'

const CategoriesComponent = () => {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <Categories className='categories'>
      <Item
        className={`categories__item ${!params.id && 'selected'}`}
        onClick={(event) => changeCategory({ event, navigate })}
      >
        <FaThLarge />
        <p>Todo</p>
      </Item>
      <Item
        className={`categories__item ${params.id === '0' && 'selected'}`}
        id={0}
        onClick={(event) => changeCategory({ event, navigate })}
      >
        <GiRunningShoe />
        <p>Calzado</p>
      </Item>
      <Item
        className={`categories__item ${params.id === '1' && 'selected'}`}
        id={1}
        onClick={(event) => changeCategory({ event, navigate })}
      >
        <BsSmartwatch />
        <p>Relojes</p>
      </Item>
      <Item
        className={`categories__item ${params.id === '2' && 'selected'}`}
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

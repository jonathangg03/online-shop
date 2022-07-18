import { FaThLarge, FaTshirt } from 'react-icons/fa'
import { GiRunningShoe } from 'react-icons/gi'
import { BsSmartwatch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Categories, Item } from './styles'

const CategoriesComponent = () => {
  const navigate = useNavigate()

  const handleCategory = (event) => {
    if (event.target.parentNode.id) {
      //Click on <button>
      navigate(`/home/${event.target.parentNode.id}`)
    } else if (event.target.id) {
      //click on <p>
      navigate(`/home/${event.target.id}`)
    } else if (event.target.parentNode.parentNode.id) {
      //clic on icon
      navigate(`/home/${event.target.parentNode.parentNode.id}`)
    } else {
      navigate('/home')
    }
  }

  return (
    <Categories className='categories'>
      <Item className='selected' onClick={handleCategory}>
        <FaThLarge />
        <p>Todo</p>
      </Item>
      <Item className='categories__item' id={0} onClick={handleCategory}>
        <GiRunningShoe />
        <p>Calzado</p>
      </Item>
      <Item className='categories__item' id={1} onClick={handleCategory}>
        <BsSmartwatch />
        <p>Relojes</p>
      </Item>
      <Item className='categories__item' id={2} onClick={handleCategory}>
        <FaTshirt />
        <p>Ropa</p>
      </Item>
    </Categories>
  )
}

export default CategoriesComponent

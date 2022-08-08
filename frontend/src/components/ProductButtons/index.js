import { useContext } from 'react'
import { IoCart } from 'react-icons/io5'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Buttons, Like, Chart } from './styles'
import useHandleModal from '../../hooks/useHandleModal'
import Context from '../../context/onlineStoreContext'

const ProductButtons = () => {
  const { dispatch, store } = useContext(Context)
  const { handleModal } = useHandleModal({ dispatch, store })

  return (
    <Buttons>
      <Like>
        <AiOutlineHeart />
      </Like>
      <Chart onClick={handleModal}>
        <span>Agregar al carrito</span>
        <IoCart />
      </Chart>
    </Buttons>
  )
}

export default ProductButtons

import { IoCart } from 'react-icons/io5'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {Buttons, Like, Chart} from './styles'

const ProductButtons = () => {
    return (
        <Buttons>
            <Like><AiOutlineHeart/></Like>
            <Chart>
            <span>Agregar al carrito</span>
                <IoCart />
            </Chart>
        </Buttons>  
    )
}

export default ProductButtons
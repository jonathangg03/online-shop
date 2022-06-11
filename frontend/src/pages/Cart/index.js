import CartProducts from '../../components/CartProducts'
import { BuyButton, Title } from './styles'

const Cart = () => {
  return (
    <>
      <Title>Productos agregados al carrito</Title>
      <CartProducts />
      <BuyButton type='button'>Proceder con la compra</BuyButton>
    </>
  )
}

export default Cart

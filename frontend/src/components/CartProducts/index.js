import tennis from '../../../public/tenis2.png'
import {
  Products,
  Product,
  ImageContainer,
  ProductName,
  ProductDescription,
  ProductPrice,
  DeleteButton
} from './style'

const PRODUCTS = [
  {
    name: 'Nike shoes',
    description: 'Tenis verdes Nike de Tallas 40, 41, 42, 43',
    price: 12000,
    sku: 1,
    image: tennis
  }
]

const CartProducts = () => {
  return (
    <Products>
      {PRODUCTS.map((el) => {
        return (
          <Product key={el.sku}>
            <ImageContainer>
              <img src={el.image} alt={el.description} />
            </ImageContainer>
            <div>
              <ProductName>{el.name}</ProductName>
              <ProductDescription>{el.description}</ProductDescription>
              <ProductPrice>₡{el.price}</ProductPrice>
            </div>
            <DeleteButton>X</DeleteButton>
          </Product>
        )
      })}
    </Products>
  )
}

export default CartProducts

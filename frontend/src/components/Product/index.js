import { Product as ProductContainer, ColorButton } from './styles'

const Product = ({ images, description, name, price, colors }) => {
  return (
    <ProductContainer>
      <img src={images.main} alt={description.small} />
      <h5>{name}</h5>
      <p>{description.small}</p>
      <h6>₡{price}</h6>
      <div className='new'>Nuevo</div>
      <div className='colors'>
        {colors.map((color) => {
          return (
            <ColorButton
              key={color}
              className='color'
              color={color}
            ></ColorButton>
          )
        })}
      </div>
    </ProductContainer>
  )
}

export default Product

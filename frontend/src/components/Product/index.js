import { Product as ProductContainer } from './styles'

const Product = ({ images, description, name, price }) => {
  return (
    <ProductContainer>
      <img src={images.main} alt={description.small} />
      <h5>{name}</h5>
      <p>{description.small}</p>
      <h6>₡{price}</h6>
      <div className='new'>Nuevo</div>
    </ProductContainer>
  )
}

export default Product

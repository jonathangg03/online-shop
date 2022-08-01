import { useState } from 'react'
import { Product as ProductContainer, ColorButton } from './styles'

const Product = ({ images, description, name, price, colors }) => {
  const [colorSelected, setColorSelected] = useState(colors[0])

  const handleSelectColor = (event) => {
    setColorSelected(parseInt(event.target.id))
  }

  /*
   * Next step: Review the product image to show the correct one
   */

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
              onClick={handleSelectColor}
              selected={color === colorSelected}
              id={color}
              color={color}
            ></ColorButton>
          )
        })}
      </div>
    </ProductContainer>
  )
}

export default Product

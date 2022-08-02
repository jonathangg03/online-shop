import { useState } from 'react'
import { Product as ProductContainer, ColorButton } from './styles'

const Product = ({ images, description, name, price, colors, variations }) => {
  const [colorSelected, setColorSelected] = useState(colors[0])

  const handleSelectColor = (event) => {
    setColorSelected(parseInt(event.target.id))
  }

  return (
    <ProductContainer>
      <img
        src={
          variations.find((variation) => variation.color === colorSelected)
            .images.presentation
        }
        alt={description.small}
      />
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

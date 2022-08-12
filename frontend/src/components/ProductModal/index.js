import { useState, useEffect } from 'react'
import { Container } from './styles'
import { COLORS } from '../../data'

const COLOR_NAMES = Object.keys(COLORS)

const ProductModal = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(product.variations[0])
  const [max, setMax] = useState(product.variations[0].stock)

  /* 
        !FIX PROBLEM: WHEN YOU SET THE MAXIMUM VALUE IN QUANTITY, AND SELECT
        !OTHER ONE WITH LESS STOCK, IT STAYS WITH THE OTHER VALUE
    */
  useEffect(() => {
    if (selectedProduct) {
      setMax(setSelectedProduct.stock)
    }
  }, [setSelectedProduct])

  return (
    <Container>
      <form>
        <label>
          <span>Color:</span>
          <select
            name='quantity'
            id='quantity'
            onChange={(event) => {
              product.variations.map((variation) => {
                if (parseInt(event.target.value) === variation.color) {
                  setSelectedProduct(variation)
                }
              })
            }}
          >
            {product.variations.map((variation) => {
              return (
                <option value={variation.color} key={variation.color}>
                  {COLOR_NAMES[variation.color]}
                </option>
              )
            })}
          </select>
        </label>
        <label>
          <span>Cantidad:</span>
          {max === 0 && <p>No disponible en stock</p>}
          {max > 0 && (
            <input
              type='number'
              required
              min={1}
              max={selectedProduct.stock}
              defaultValue={1}
            />
          )}
        </label>
        {console.log(max)}
      </form>
    </Container>
  )
}

export default ProductModal

import { useState } from 'react'
import { products } from '../../fakeDB/products'
import {
  Images,
  MainImage,
  ImageMenu,
  ImageOption,
  Title,
  Description,
  Price
} from './styles'

const mockProduct = products[0]
const variations = mockProduct.variations
const imagesToShow = []
variations.map((variation) => {
  variation.images.collection.map((image) => {
    imagesToShow.push(image)
  })
})

const Product = () => {
  const [mainImage, setMainImage] = useState(
    mockProduct.variations[0].images.collection[0]
  )
  return (
    <>
      <Images>
        <MainImage>
          <img src={mainImage} />
        </MainImage>
        <ImageMenu>
          {imagesToShow.map((imageUrl) => (
            <ImageOption
              src={imageUrl}
              key={imageUrl}
              selected={imageUrl === mainImage}
              onClick={() => setMainImage(imageUrl)}
            />
          ))}
        </ImageMenu>
      </Images>
      <Title>{mockProduct.name}</Title>
      <Description>{mockProduct.description.long}</Description>
      <Price>₡{mockProduct.price}</Price>
    </>
  )
}

export default Product

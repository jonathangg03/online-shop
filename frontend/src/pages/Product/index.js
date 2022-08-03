import { useState } from 'react'
import { products } from '../../fakeDB/products'
import { IoCart } from 'react-icons/io5'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {
  Images,
  MainImage,
  ImageMenu,
  ImageOption,
  Title,
  Description,
  Price,
  Buttons,
  Like,
  Chart
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
      <Buttons>
        <Like><AiOutlineHeart/></Like>
        <Chart>
          <span>Agregar al carrito</span>
          <IoCart />
          </Chart>
      </Buttons>
    </>
  )
}

export default Product

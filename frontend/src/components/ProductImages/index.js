import { useState } from 'react'
import {
    Images,
    MainImage,
    ImageMenu,
    ImageOption
  } from './styles'

const ProductImages = ({product, imageCollection}) => {
    const [mainImage, setMainImage] = useState(
        product.variations[0].images.collection[0]
      )

    return (
        <Images>
        <MainImage>
          <img src={mainImage} />
        </MainImage>
        <ImageMenu>
          {imageCollection.map((imageUrl) => (
            <ImageOption
              src={imageUrl}
              key={imageUrl}
              selected={imageUrl === mainImage}
              onClick={() => setMainImage(imageUrl)}
            />
          ))}
        </ImageMenu>
      </Images>

    )
}

export default ProductImages
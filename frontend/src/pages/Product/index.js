import { products } from '../../fakeDB/products'
import ProductDetails from '../../components/ProductDetails'
import ProductButtons from '../../components/ProductButtons'
import ProductImages from '../../components/ProductImages'
import ProductModal from '../../components/ProductModal'
import Modal from '../../components/ModalContainer'

const mockProduct = products[0]
const variations = mockProduct.variations
const imagesToShow = []
variations.map((variation) => {
  variation.images.collection.map((image) => {
    imagesToShow.push(image)
  })
})

const Product = () => {
  return (
    <>
      <ProductImages product={mockProduct} imageCollection={imagesToShow} />
      <ProductDetails
        name={mockProduct.name}
        description={mockProduct.description.long}
        price={mockProduct.price}
      />
      <ProductButtons />
      <Modal>
        <ProductModal product={mockProduct} />
      </Modal>
    </>
  )
}

export default Product

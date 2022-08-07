import { products } from '../fakeDB/products'

const initialState = {
  openModal: false,
  category: 0,
  search: '',
  products: products,
  searchedProducts: []
}

export default initialState

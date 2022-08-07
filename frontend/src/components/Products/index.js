import { useContext, useEffect, useState } from 'react'
import { HiFilter } from 'react-icons/hi'
import { Products, Head } from './styles'
import Modal from '../ModalContainer'
import Context from '../../context/onlineStoreContext'
import Product from '../Product'
import { types } from '../../reducers'
import { FILTERS } from '../../data'
import FilterModal from '../FilterModal'

const ProductsComponent = ({ products }) => {
  const { store, dispatch } = useContext(Context)
  const [categoryName, setCategoryName] = useState('Todos')

  useEffect(() => {
    if (store.category > -1) {
      const searchedValue = store.category
      const categoriesValues = Object.values(FILTERS)
      const categoryValueIndex = categoriesValues.indexOf(searchedValue)
      const categoriesNames = Object.keys(FILTERS)
      const categoryName = categoriesNames[categoryValueIndex]
      setCategoryName(categoryName)
    }
  }, [store.category])

  return (
    <section>
      <Head>
        <h3>Filtrando: {categoryName}</h3>
        <button
          type='button'
          onClick={() => dispatch({ type: types.OPEN_MODAL })}
        >
          <h5>Filtrar</h5>
          <HiFilter />
        </button>
      </Head>
      <Products>
        {products.map((product) => {
          return <Product key={product.variations[0].sku} {...product} />
        })}
      </Products>
      <Modal>
        <FilterModal />
      </Modal>
    </section>
  )
}

export default ProductsComponent

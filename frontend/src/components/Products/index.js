import { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { HiFilter } from 'react-icons/hi'
import { Products, Head } from './styles'
import Modal from '../Modal'
import Context from '../../context/onlineStoreContext'
import { products } from '../../fakeDB/products'
import Product from '../Product'
import { types } from '../../reducers'
import { CATEGORIES } from '../../data'

const Popular = () => {
  const { store, dispatch } = useContext(Context)
  const [categoryName, setCategoryName] = useState('Todos')

  useEffect(() => {
    if(store.category > -1) {
      const searchedValue = store.category
      const categoriesValues = Object.values(CATEGORIES)
      const categoryValueIndex = categoriesValues.indexOf(searchedValue)
      const categoriesNames = Object.keys(CATEGORIES)
      const categoryName = categoriesNames[categoryValueIndex]
      console.log(categoryName)
      
      setCategoryName(categoryName)
    }
  }, [store.category])

  return (
    <section>
      <Head>
        <h3>Mostrando: {categoryName}</h3>
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
          return <Product key={product.sku} {...product} />
        })}
      </Products>
      {store.openModal &&
        ReactDOM.createPortal(<Modal />, document.getElementById('modal'))}
    </section>
  )
}

export default Popular

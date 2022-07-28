import { useContext } from 'react'
import ReactDOM from 'react-dom'
import { HiFilter } from 'react-icons/hi'
import { Products, Head } from './styles'
import Modal from '../Modal'
import Context from '../../context/onlineStoreContext'
import { products } from '../../fakeDB/products'
import Product from '../Product'
import { types } from '../../reducers'

const Popular = () => {
  const { store, dispatch } = useContext(Context)

  return (
    <section>
      <Head>
        <h3>Mostrando: Todos</h3>
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

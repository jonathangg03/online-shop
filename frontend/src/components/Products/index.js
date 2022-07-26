import { useState } from 'react'
import ReactDOM from 'react-dom'
import { HiFilter } from 'react-icons/hi'
import { Products, Head } from './styles'
import Modal from '../Modal'
import { products } from '../../fakeDB/products'
import Product from '../Product'

const Popular = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev)
  }

  return (
    <section>
      <Head>
        <h3>Mostrando: Todos</h3>
        <button type='button' onClick={handleOpenModal}>
          <h5>Filtrar</h5>
          <HiFilter />
        </button>
      </Head>
      <Products>
        {products.map((product) => {
          return <Product key={product.sku} {...product} />
        })}
      </Products>
      {openModal &&
        ReactDOM.createPortal(
          <Modal handleOpenModal={handleOpenModal} />,
          document.getElementById('modal')
        )}
    </section>
  )
}

export default Popular

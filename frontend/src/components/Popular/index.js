import { HiFilter } from 'react-icons/hi'
import { Products, Head } from './styles'
import Tennis from '../../../public/tenis2.png'

const Popular = () => {
  return (
    <section>
      <Head>
        <h3>Mostrando: Popular</h3>
        <button type='button'>
          <h5>Filtrar</h5>
          <HiFilter />
        </button>
      </Head>
      <Products>
        <article>
          <img src={Tennis} alt='tennis' width='20' height='20' />
          <h5>Nike shoes</h5>
          <p>Tenis verdes Nike de Tallas 40, 41, 42, 43</p>
          <h6>₡12000</h6>
          <div className='new'>Nuevo</div>
        </article>
        <article>
          <img src={Tennis} alt='tennis' width='20' height='20' />
          <h5>Nike shoes</h5>
          <p>Tenis verdes Nike de Tallas 40, 41, 42, 43</p>
          <h6>₡12000</h6>
        </article>
        <article>
          <img src={Tennis} alt='tennis' width='20' height='20' />
          <h5>Nike shoes</h5>
          <p>Tenis verdes Nike de Tallas 40, 41, 42, 43</p>
          <h6>₡12000</h6>
        </article>
        <article>
          <img src={Tennis} alt='tennis' width='20' height='20' />
          <h5>Nike shoes</h5>
          <p>Tenis verdes Nike de Tallas 40, 41, 42, 43</p>
          <h6>₡12000</h6>
        </article>
        <article>
          <img src={Tennis} alt='tennis' width='20' height='20' />
          <h5>Nike shoes</h5>
          <p>Tenis verdes Nike de Tallas 40, 41, 42, 43</p>
          <h6>₡12000</h6>
        </article>
        <article>
          <img src={Tennis} alt='tennis' width='20' height='20' />
          <h5>Nike shoes</h5>
          <p>Tenis verdes Nike de Tallas 40, 41, 42, 43</p>
          <h6>₡12000</h6>
        </article>
      </Products>
    </section>
  )
}

export default Popular

import { Offers, List, Details, Product, Image, Counter } from './styles'
import Tennis from '../../../public/tenis.png'

const OffersComponent = () => {
  return (
    <Offers className='offers'>
      <List className='offers__list'>
        <Details className='offers__list-details'>
          <span>Descuento especial</span>
          <div className='percentage'>50%</div>
          <div>MENOS</div>
        </Details>
        <Product className='offers__list-image'>
          <Image src={Tennis} alt='Tenis Nike' />
        </Product>
      </List>
      <Counter className='offers__counter'>
        <div className='selected'></div>
        <div></div>
        <div></div>
      </Counter>
    </Offers>
  )
}

export default OffersComponent

import { Container, OptionList, Option } from './styles'

const Modal = () => {
  return (
    <Container>
      <OptionList>
        <legend>Filtrar por:</legend>
        <Option type='radio' name='filter' value='all' />
        <label>Ver todos</label>

        <Option type='radio' name='filter' value='priceMax' />
        <label>Precio (Mayor a menor)</label>

        <Option type='radio' name='filter' value='priceMin' />
        <label>Precio (Menor a mayor)</label>

        <Option type='radio' name='filter' value='popular' />
        <label>Popularidad</label>

        <Option type='radio' name='filter' value='new' />
        <label>Nuevo</label>

        <Option type='radio' name='filter' value='name' />
        <label>Nombre</label>
      </OptionList>
    </Container>
  )
}

export default Modal

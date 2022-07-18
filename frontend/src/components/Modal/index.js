import { Container, OptionList, OptionContainer, Option } from './styles'

const Modal = ({ handleOpenModal }) => {
  const handleChangeCheck = (event) => {
    handleOpenModal()
  }

  return (
    <Container onClick={handleOpenModal}>
      <OptionList>
        <OptionContainer>
          <Option
            type='radio'
            name='filter'
            value='all'
            defaultChecked
            onChange={handleChangeCheck}
          />
          <span>Ver todos</span>
        </OptionContainer>
        <OptionContainer>
          <Option
            type='radio'
            name='filter'
            value='priceMax'
            onChange={handleChangeCheck}
          />
          <span>Precio (Mayor a menor)</span>
        </OptionContainer>

        <OptionContainer>
          <Option
            type='radio'
            name='filter'
            value='priceMin'
            onChange={handleChangeCheck}
          />
          <span>Precio (Menor a mayor)</span>
        </OptionContainer>

        <OptionContainer>
          <Option
            type='radio'
            name='filter'
            value='popular'
            onChange={handleChangeCheck}
          />
          <span>Popularidad</span>
        </OptionContainer>

        <OptionContainer>
          <Option
            type='radio'
            name='filter'
            value='new'
            onChange={handleChangeCheck}
          />
          <span>Nuevo</span>
        </OptionContainer>

        <OptionContainer>
          <Option
            type='radio'
            name='filter'
            value='name'
            onChange={handleChangeCheck}
          />
          <span>Nombre</span>
        </OptionContainer>
      </OptionList>
    </Container>
  )
}

export default Modal

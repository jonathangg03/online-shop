import { useContext } from 'react'
import { Container, OptionList, OptionContainer, Option } from './styles'
import Context from '../../context/onlineStoreContext'
import { types } from '../../reducers'

const Modal = () => {
  const { dispatch } = useContext(Context)

  const handleChangeCheck = (event) => {
    dispatch({ type: types.CHANGE_CATEGORY, payload: event.target.value })
    dispatch({ type: types.CLOSE_MODAL })
  }

  const handleCloseModal = (event) => {
    //without this, modal will be closed with every click
    if (event.target.tagName === 'SECTION') {
      dispatch({ type: types.CLOSE_MODAL })
    }
  }

  return (
    <Container onClick={handleCloseModal}>
      <OptionList>
        <OptionContainer>
          <Option
            type='radio'
            name='filter'
            value='0'
            defaultChecked
            onChange={handleChangeCheck}
          />
          <span>Ver todos</span>
        </OptionContainer>
        <OptionContainer>
          <Option
            type='radio'
            name='filter'
            value='1'
            onChange={handleChangeCheck}
          />
          <span>Precio (Mayor a menor)</span>
        </OptionContainer>
        <OptionContainer>
          <Option
            type='radio'
            name='filter'
            value='2'
            onChange={handleChangeCheck}
          />
          <span>Precio (Menor a mayor)</span>
        </OptionContainer>
        <OptionContainer>
          <Option
            type='radio'
            name='filter'
            value='3'
            onChange={handleChangeCheck}
          />
          <span>Popularidad</span>
        </OptionContainer>
        <OptionContainer>
          <Option
            type='radio'
            name='filter'
            value='4'
            onChange={handleChangeCheck}
          />
          <span>Nuevo</span>
        </OptionContainer>
        <OptionContainer>
          <Option
            type='radio'
            name='filter'
            value='5'
            onChange={handleChangeCheck}
          />
          <span>Nombre</span>
        </OptionContainer>
      </OptionList>
    </Container>
  )
}

export default Modal

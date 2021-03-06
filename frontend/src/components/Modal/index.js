import { useContext } from 'react'
import { Container, OptionList, OptionContainer, Option } from './styles'
import Context from '../../context/onlineStoreContext'
import { types } from '../../reducers'
import { CATEGORIES } from '../../data'

const Modal = () => {
  const { store, dispatch } = useContext(Context)

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
            checked={store.category === CATEGORIES.Todos}
            onChange={handleChangeCheck}
          />
          <span>Ver todos</span>
        </OptionContainer>
        <OptionContainer>
          <Option
            type='radio'
            name='filter'
            value='1'
            checked={store.category === CATEGORIES['Precio (mayor a menor)']}
            onChange={handleChangeCheck}
          />
          <span>Precio (Mayor a menor)</span>
        </OptionContainer>
        <OptionContainer>
          <Option
            type='radio'
            name='filter'
            value='2'
            checked={store.category === CATEGORIES['Precio (menor a mayor)']}
            onChange={handleChangeCheck}
          />
          <span>Precio (Menor a mayor)</span>
        </OptionContainer>
        <OptionContainer>
          <Option
            type='radio'
            name='filter'
            value='3'
            checked={store.category === CATEGORIES.Popularidad}
            onChange={handleChangeCheck}
          />
          <span>Popularidad</span>
        </OptionContainer>
        <OptionContainer>
          <Option
            type='radio'
            name='filter'
            value='4'
            checked={store.category === CATEGORIES.Nuevo}
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
            checked={store.category === CATEGORIES.Nombre}
          />
          <span>Nombre</span>
        </OptionContainer>
      </OptionList>
    </Container>
  )
}

export default Modal

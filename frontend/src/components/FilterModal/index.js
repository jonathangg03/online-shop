import { useContext } from 'react'
import Context from '../../context/onlineStoreContext'
import { types } from '../../reducers'
import { FILTERS } from '../../data'
import { OptionList, OptionContainer, Option } from './styles'

const FilterModal = () => {
  const { store, dispatch } = useContext(Context)

  const handleChangeCheck = (event) => {
    dispatch({
      type: types.CHANGE_CATEGORY,
      payload: parseInt(event.target.value)
    })
    dispatch({ type: types.CLOSE_MODAL })
  }

  return (
    <OptionList>
      <OptionContainer>
        <Option
          type='radio'
          name='filter'
          value={0}
          checked={store.category === FILTERS.Todos}
          onChange={handleChangeCheck}
        />
        <span>Todos</span>
      </OptionContainer>
      <OptionContainer>
        <Option
          type='radio'
          name='filter'
          value={1}
          checked={store.category === FILTERS['Precio (mayor a menor)']}
          onChange={handleChangeCheck}
        />
        <span>Precio (Mayor a menor)</span>
      </OptionContainer>
      <OptionContainer>
        <Option
          type='radio'
          name='filter'
          value={2}
          checked={store.category === FILTERS['Precio (menor a mayor)']}
          onChange={handleChangeCheck}
        />
        <span>Precio (Menor a mayor)</span>
      </OptionContainer>
      <OptionContainer>
        <Option
          type='radio'
          name='filter'
          value={3}
          checked={store.category === FILTERS.Popularidad}
          onChange={handleChangeCheck}
        />
        <span>Popularidad</span>
      </OptionContainer>
      <OptionContainer>
        <Option
          type='radio'
          name='filter'
          value={4}
          checked={store.category === FILTERS.Nuevo}
          onChange={handleChangeCheck}
        />
        <span>Nuevo</span>
      </OptionContainer>
      <OptionContainer>
        <Option
          type='radio'
          name='filter'
          value={5}
          onChange={handleChangeCheck}
          checked={store.category === FILTERS.Nombre}
        />
        <span>Nombre</span>
      </OptionContainer>
    </OptionList>
  )
}

export default FilterModal

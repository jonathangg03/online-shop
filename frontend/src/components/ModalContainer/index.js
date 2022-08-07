import { createPortal } from 'react-dom'
import { useContext } from 'react'
import { Container } from './styles'
import Context from '../../context/onlineStoreContext'
import { types } from '../../reducers'

const ModalContainer = ({ children }) => {
  const { store, dispatch } = useContext(Context)

  const handleCloseModal = (event) => {
    //without this, modal will be closed with every click
    if (event.target.tagName === 'SECTION') {
      dispatch({ type: types.CLOSE_MODAL })
    }
  }

  return (
    <>
      {store.openModal &&
        createPortal(
          <Container onClick={handleCloseModal}>{children}</Container>,
          document.getElementById('modal')
        )}
    </>
  )
}

export default ModalContainer

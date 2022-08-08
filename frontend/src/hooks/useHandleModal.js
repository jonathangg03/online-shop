import { types } from '../reducers'

const useHandleModal = ({ dispatch, store }) => {
  const handleModal = () => {
    if (store.openModal) {
      dispatch({ type: types.CLOSE_MODAL })
    } else {
      dispatch({ type: types.OPEN_MODAL })
    }
  }

  return { handleModal }
}

export default useHandleModal

const types = {
  OPEN_MODAL: 'open-modal',
  CLOSE_MODAL: 'close-modal',
  CHANGE_CATEGORY: 'change-category'
}

const reducer = (state, actions) => {
  switch (actions.type) {
    case types.OPEN_MODAL:
      return {
        ...state,
        openModal: true
      }
    case types.CLOSE_MODAL:
      return {
        ...state,
        openModal: false
      }
    case types.CHANGE_CATEGORY:
      return {
        ...state,
        category: actions.payload
      }
    default:
      return state
  }
}

export { types }
export default reducer

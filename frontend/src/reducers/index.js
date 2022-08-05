const types = {
  OPEN_MODAL: 'open-modal',
  CLOSE_MODAL: 'close-modal',
  CHANGE_CATEGORY: 'change-category',
  SET_SEARCH: 'set-search',
  SET_PRODUCTS: 'set-products',

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
    case types.SET_SEARCH:
      return {
        ...state,
        search: actions.payload
      }
    case types.SET_PRODUCTS:
      return {
        ...state,
        products: actions.payload
      }
    default:
      return state
  }
}

export { types }
export default reducer

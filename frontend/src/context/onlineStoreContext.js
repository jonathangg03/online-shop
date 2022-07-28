import { createContext, useReducer } from 'react'
import initialState from '../reducers/initialState'
import reducer from '../reducers'

const Context = createContext()

const ContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ store, dispatch }}>{children}</Context.Provider>
  )
}

export { ContextProvider }
export default Context

import { createContext } from 'react'

const Context = createContext()

const ContextProvider = ({ children }) => {
  return (
    <Context.Provider value={{ saludo: 'Hola mundo' }}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider }
export default Context

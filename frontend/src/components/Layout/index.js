import Menu from '../Menu'

const Layout = ({ children }) => {
  return (
    <main>
      {children}
      <Menu />
    </main>
  )
}

export default Layout

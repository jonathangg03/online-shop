// import { styles, globals } from './styles'

const Layout = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{styles}</style>
      <style jsx global>
        {globals}
      </style>
    </>
  )
}

export default Layout

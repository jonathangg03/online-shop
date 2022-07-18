import { useContext } from 'react'
import Context from '../../context/onlineStoreContext'
import Categories from '../../components/Categories'
import Popular from '../../components/Popular'

const Home = () => {
  const context = useContext(Context)
  return (
    <>
      <Categories />
      <Popular />
    </>
  )
}

export default Home

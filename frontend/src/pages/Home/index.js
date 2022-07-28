import { useContext } from 'react'
import Context from '../../context/onlineStoreContext'
import Categories from '../../components/Categories'
import Products from '../../components/Products'

const Home = () => {
  const { store } = useContext(Context)
  return (
    <>
      <Categories />
      {console.log(store)}
      <Products />
    </>
  )
}

export default Home

import { useContext } from 'react'
import Products from '../../components/Products'
import SearchForm from '../../components/SearchForm'
import Context from '../../context/onlineStoreContext'

const Search = () => {
  const { store } = useContext(Context)
  return (
    <>
      <SearchForm />
      <Products products={store.searchedProducts} />
    </>
  )
}

export default Search

import { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Search, Input, Button } from './styles'
import Context from '../../context/onlineStoreContext'
import { types } from '../../reducers'
import { products } from '../../fakeDB/products'

const SearchForm = () => {
  const { dispatch, store } = useContext(Context)

  const onSearchChange = (event) =>
    dispatch({ type: types.SET_SEARCH, payload: event.target.value })

  const search = (event) => {
    event.preventDefault()
    const searchValue = store.search
    const filteredProducts = products.filter((product) => {
      const name = product.name
      const descriptionSmall = product.description.small
      const descriptionLong = product.description.long
      if (
        name.toLowerCase().includes(searchValue.toLowerCase()) ||
        descriptionSmall.toLowerCase().includes(searchValue.toLowerCase()) ||
        descriptionLong.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return product
      }
    })
    dispatch({ type: types.SET_PRODUCTS, payload: filteredProducts })
  }

  return (
    <Search onSubmit={search}>
      <Input
        type='text'
        placeholder='Busca un producto...'
        onChange={onSearchChange}
        value={store.search}
      />
      <Button>
        <FaSearch />
      </Button>
    </Search>
  )
}

export default SearchForm

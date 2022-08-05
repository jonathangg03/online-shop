import { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Search, Input, Button } from './styles'
import Context from '../../context/onlineStoreContext'
import { types } from '../../reducers'
import { products } from '../../fakeDB/products'

const SearchForm = () => {
  const {dispatch, store} = useContext(Context)

  const onSearchChange = (event) => dispatch({type:types.SET_SEARCH, payload: event.target.value})
  const search = () => {
    const searchValue = store.search
  const filteredProducts = products.filter(product => {
      const name= product.name
      const descriptionSmall = product.description.small
      const descriptionLong = product.description.long
      if(searchValue.toLowerCase().includes(name.toLocaleLowerCase()) || searchValue.toLowerCase().includes(descriptionSmall.toLocaleLowerCase()) || searchValue.toLowerCase().includes(descriptionLong.toLocaleLowerCase())) {
        return product
      }
    })
  dispatch({type: types.SET_PRODUCTS, payload: filteredProducts})
  }
  

  return (
    <Search>
      <Input type='text' placeholder='Busca un producto...' onChange={onSearchChange} value={store.search} />
      <Button onSubmit={search}>
        <FaSearch />
      </Button>
    </Search>
  )
}

export default SearchForm

import { Search, Input, Button } from './styles'
import { FaSearch } from 'react-icons/fa'

const SearchForm = () => {
  return (
    <Search>
      <Input type='text' placeholder='Busca un producto...' />
      <Button>
        <FaSearch />
      </Button>
    </Search>
  )
}

export default SearchForm

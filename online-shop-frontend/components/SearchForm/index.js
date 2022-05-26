import styles from './styles'
import { FaSearch } from 'react-icons/fa'

const SearchForm = () => {
  return (
    <>
      <form className='search'>
        <input type='text' placeholder='Busca un producto...' />
        <button>
          <FaSearch />
        </button>
      </form>
      <style jsx>{styles}</style>
    </>
  )
}

export default SearchForm

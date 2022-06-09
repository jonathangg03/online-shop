import Categories from '../../components/Categories'
import Offers from '../../components/Offers'
import Popular from '../../components/Popular'
import SearchForm from '../../components/SearchForm'

const Home = () => {
  return (
    <>
      <SearchForm />
      <Offers />
      <Categories />
      <Popular />
    </>
  )
}

export default Home

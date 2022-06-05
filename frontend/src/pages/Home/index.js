import Categories from '../../components/Categories'
import Header from '../../components/Header'
import Offers from '../../components/Offers'
import Popular from '../../components/Popular'
import SearchForm from '../../components/SearchForm'

const Home = () => {
  return (
    <>
      <Header />
      <SearchForm />
      <Offers />
      <Categories />
      <Popular />
    </>
  )
}

export default Home

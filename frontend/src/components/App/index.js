import Categories from '../Categories'
import Header from '../Header'
import Menu from '../Menu'
import Offers from '../Offers'
import Popular from '../Popular'
import SearchForm from '../SearchForm'

export default function Home() {
  return (
    <>
      <Header />
      <SearchForm />
      <Offers />
      <Categories />
      <Popular />
      <Menu />
    </>
  )
}

import Categories from '../Categories'
import Header from '../Header'
import Offers from '../Offers'
import SearchForm from '../SearchForm'

export default function Home() {
  return (
    <>
      <Header />
      <SearchForm />
      <Offers />
      <Categories />
    </>
  )
}

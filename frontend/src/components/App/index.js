import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../../pages/Home'
import Liked from '../../pages/Liked'
import Search from '../../pages/Search'

export default function App() {
  const token = true

  return (
    <>
      {token ? (
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/liked' element={<Liked />} />
              <Route path='/search' element={<Search />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>{/* <Route path='/' element={<Home />} /> */}</Routes>
        </BrowserRouter>
      )}
    </>
  )
}

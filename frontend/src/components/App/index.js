import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../../pages/Home'
import Liked from '../../pages/Liked'

export default function App() {
  const token = true

  return (
    <>
      {token ? (
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/liked' element={<Liked />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../../pages/Home'

export default function App() {
  const token = true

  return (
    <>
      {token ? (
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Layout>
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

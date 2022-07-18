import { createRoot } from 'react-dom/client'
import App from './components/App'
import './styles/index.css'
import { ContextProvider } from './context/onlineStoreContext'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
)

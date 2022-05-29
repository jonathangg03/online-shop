import { createRoot } from 'react-dom/client'
import App from './components/App'
const container = document.getElementById('app')
const root = createRoot(container)
import './styles/index.css'

root.render(<App />)

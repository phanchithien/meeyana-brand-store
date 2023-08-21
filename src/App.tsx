import './App.css'
import { HashRouter } from 'react-router-dom'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselBanner from './components/CarouselBanner';
function App() {
  return (
    <HashRouter>
      <Header />
      <CarouselBanner />
    </HashRouter>
  )
}

export default App

import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Landingpage from './components/Landingpage'
import Navbar from './components/Navbar'
import Picwithdis from './components/Picwithdis'
import Professor from './components/Professor'

function App() {
  

  return (
    <div>
      <Navbar/>
      <Landingpage/>
      <Picwithdis/>
      <Professor/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default App

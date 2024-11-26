import './App.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Features from './components/Features/Features'
import Faq from './components/Faq/Faq'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <div className='top'>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Features />
    <Faq />
    <Footer />
    </>
  )
}

export default App

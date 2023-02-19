import Hero from './components/HeroSection'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <Box>
        <Hero/>
        <Navbar/>
        <About/>
        <Projects/>
        <Footer/>
      </Box>

    </div>
  )
}

export default App

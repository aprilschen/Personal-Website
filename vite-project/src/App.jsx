import Loading from './components/Loading';
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { Box } from '@chakra-ui/react'
import {Routes, Route} from 'react-router-dom';

import AboutPage from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import CafeStile from './components/pages/CafeStile';
import Digicache from './components/pages/Digicache';
import LittleLemon from './components/pages/LittleLemon';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Box>
                <Loading/>
                <Navbar/>
                <Landing/>
                <About/>
                <Projects/>
                <Footer/>
          </Box>
        }/>

        <Route path="/about" element={
          <Box>
            <Navbar/>
              <AboutPage />
            <Footer/>
          </Box>
        }/>

        <Route path="/portfolio" element={
          <Box>
            <Navbar/>
              <Portfolio />
            <Footer/>
          </Box>
        }/>

        <Route path="/contact" element={
          <Box>
            <Navbar/>
              <Contact />
            <Footer/>
          </Box>
        }/>

      <Route path="/cafe-stile" element={
          <Box>
            <Navbar/>
              <CafeStile/>
            <Footer/>
          </Box>
        }/>

      <Route path="/digicache" element={
          <Box>
            <Navbar/>
              <Digicache/>
            <Footer/>
          </Box>
        }/>

      <Route path="/little-lemon" element={
          <Box>
            <Navbar/>
              <LittleLemon/>
            <Footer/>
          </Box>
        }/>
      </Routes>
    </div>
  );
}

export default App

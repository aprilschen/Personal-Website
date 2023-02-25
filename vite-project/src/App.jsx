import Landing from './components/Landing'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import ReactLoading from "react-loading";
import { Flex } from '@chakra-ui/react'
import {Routes, Route} from 'react-router-dom';

import AboutPage from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import CafeStile from './components/pages/CafeStile';
import Digicache from './components/pages/Digicache';
import LittleLemon from './components/pages/LittleLemon';

function App() {
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(
          setDone(true)
        );
    }, 2000);
  }, []);


  return (
    <div className="App">
    {!done ? (
      <Flex minHeight={'100vh'} justify={'center'} align={'center'}
      bg="brand.100">
        <ReactLoading
        type={"cubes"}
        color={"#FC6AAF"}
        height={'15%'}
        width={'15%'}
        />
      </Flex>

    ) : (
      <Routes>
        <Route path="/" element={
          <Box>
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
    )}
    </div>
  );
}

export default App

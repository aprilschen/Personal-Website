import Landing from './components/Landing'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { Box } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import ReactLoading from "react-loading";
import { Flex } from '@chakra-ui/react'

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
      <Box>
        <Landing/>
        <Navbar/>
        <About/>
        <Projects/>
        <Footer/>
      </Box>
    )}
    </div>
  );
}

export default App

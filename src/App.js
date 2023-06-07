

import './App.css';
import { Box, Heading } from '@chakra-ui/react';
import Movie from './Fetch';
import DetailsPage from './Details';
import { Route, Routes } from 'react-router-dom';
import Book from './Book';


function App() {
  return (
    <Box  className="App">
      <Box bg={'black'}>

       
        <Routes>
      
          <Route path="/details" element={ <DetailsPage/>} />
          <Route path="/" element={  <Movie/>} />
          <Route path="/book" element={<Book/>} />
      
        </Routes>
       
       
      </Box>
    </Box>
  );
}

export default App;

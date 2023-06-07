import { Box, FormControl, FormLabel, Input, Button, Heading, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Book = () => {
    const toast = useToast();
  const { state } = useLocation();
  const Data = state;

  const [formData, setFormData] = useState({
    movieName: Data && Data.name ? Data.name : '',
    address: '',
    name: '',
    number: '',
  });
// console.log(Data.name)
  const { movieName, address, name, number } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
   localStorage.setItem('sarika', JSON.stringify(formData));
    toast({
        position:"top",
        title: 'Data Save Succesfully',
       description: 'Data saved in localStorage',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
  };

  return (<Box h={'100vh'} pt={'20px'}>
      <Box  margin={'auto'} pb={'10px'} pt={'15px'}  borderRadius={'15px'} marginBottom={'30px'}  boxShadow={("6px 6px 0 black", "6px 6px 10px cyan")} w={'200px'} >
       <Heading 
       sx={{
        fontFamily: "Poppins", 
        fontSize: "30px",  
      }}  fontWeight={'700'} color={'cyan'} fontSize={'30px'}>MovieWorld</Heading>
        </Box>
    <Box  bg="linear-gradient(45deg, #ff0080, #00f)" maxW="400px" m="auto"  border="2px solid black" p="20px" borderRadius="20px" boxShadow={('6px 6px 0 black', '6px 6px 0 8px cyan')}>
      <Box  borderRadius="20px" boxShadow={('6px 6px 0 black', '6px 6px 0 gold')}>
        <Heading fontSize="30px" color="gold" p="20px">
          Book Movie
        </Heading>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel color="white" mt="10px">
            Movie Name
          </FormLabel>
          <Input
            type="text"
            name="movieName"
            color="#ffffff"
            value={movieName}
            onChange={handleChange}
            fontFamily="Arial, sans-serif"
            fontWeight={600}
            readOnly
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel  color="white">Address</FormLabel>
          <Input
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="Enter address"
            color="#ffffff"
            fontFamily="Arial, sans-serif"
            fontWeight={600}
            isRequired
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel color="white">Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter your name"
            color="#ffffff"
            fontFamily="Arial, sans-serif"
            fontWeight={600}
           isRequired
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel color="white">Number</FormLabel>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="Enter your phone number"
            color="#ffffff"
          isRequired
            fontWeight={600}
           
          
          />
        </FormControl>

        <Button colorScheme="teal" type="submit">
          Book
        </Button>
      </form>
    </Box>
    </Box>
  );
};

export default Book;

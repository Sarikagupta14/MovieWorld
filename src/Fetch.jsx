import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Movie = () => {
  const [Data, setShows] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        const data = await response.json();
        console.log(data);
        setShows(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box pt={'25px'} w={{ base: "80%", md: "90%", lg: "90%" }} m="auto">
      
      <Box  margin={'auto'} pb={'10px'} pt={'20px'}  borderRadius={'15px'} marginBottom={'50px'}  boxShadow={("6px 6px 0 black", "6px 6px 10px cyan")} w={'200px'} >
       <Heading 
       sx={{
        fontFamily: "Poppins", 
        fontSize: "30px",  
      }}  fontWeight={'700'} color={'cyan'} fontSize={'30px'}>MovieWorld</Heading>
        </Box>
      
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={16}>
        {Data.map((result) => {
          const { show } = result;
          const { id, name, image } = show;

          return (
            
            <Box
              boxShadow={("6px 6px 0 black", "6px 6px 10px cyan")}
              p="20px"
              border={"3px solid black"}
              borderRadius="30px"
              overflow="hidden"
            >
              <Image
                w="100%"
                objectFit={"cover"}
                src={image.original}
                alt="image"
              />
              <Box p="4">
                <Heading color={'white'} as="h2" size="md" mb="2">
                   {name}
                </Heading>

                <Link to="/details" state={result.show} key={result.id}>
                  <Flex
                    as={Button}
                    p={4}
                    alignItems="center"
                    justifyContent={"space-between"}
                    roundedBottom={"sm"}
                    cursor={"pointer"}
                    w="full"
                  >
                    <Text fontSize={"md"} fontWeight={"semibold"}>
                      View more
                    </Text>
                    <BsArrowUpRight />
                  </Flex>
                </Link>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Movie;

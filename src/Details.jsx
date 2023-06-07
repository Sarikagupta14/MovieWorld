import { Link, useLocation } from "react-router-dom";
import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";

const DetailsPage = () => {
  const { state } = useLocation();
  const Data = state;
  // console.log(Data);

  return (
    <Box p="20px"  pt={'25px'}  w={{ lg: "80%" }} m="auto">
       <Box  margin={'auto'} pb={'10px'} pt={'20px'}  borderRadius={'15px'} marginBottom={'20px'}  boxShadow={("6px 6px 0 black", "6px 6px 10px cyan")} w={'200px'} >
       <Heading 
       sx={{
        fontFamily: "Poppins", 
        fontSize: "30px",  
      }}  fontWeight={'700'} color={'cyan'} fontSize={'30px'}>MovieWorld</Heading>
        </Box>
     
      {Data && (
        <Flex
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          boxShadow={("6px 6px 0 black", "16px 17px 0 cyan")}
          p="20px"
          border={"3px solid black"}
          borderRadius="30px"
          overflow="hidden"
        >
          <Box w={{ base: "100%", md: "70%", lg: "40%" }}>
            <Image
              w={{ base: "100%", md: "100%", lg: "90%" }}
              objectFit="cover"
              m="auto"
              h={{ base: "auto", md: "500px", lg: "auto" }}
              src={Data.image.original}
              alt="image"
            />
          </Box>
          <Box p="4" w={{ base: "100%", lg: "50%" }}>
            <Heading color={"gold"} size="lg" mb="2">
              {Data.name}
            </Heading>

            <Flex gap="10px">
              <Box
                h="auto"
                w="50%"
                boxShadow={("6px 6px 0 black", "6px 6px 0 4px cyan")}
                borderRadius={"20px"}
              >
                <Text
                  align={"start"}
                  pl={{ lg: "20px" }}
                  pt="15px"
                  color={"skyblue"}
                  fontWeight={600}
                >
                  Genres: {Data.genres.join(", ")}
                </Text>
                <Text
                  align={"start"}
                  pl={{ lg: "20px" }}
                  color={"gold"}
                  fontWeight={600}
                >
                  Language : {Data.language}
                </Text>
                <Text color={'white'} align={"start"} pl={{ lg: "20px" }} fontWeight={600}>
                  Status: {Data.status}
                </Text>
              </Box>
              <Box
                h="auto"
                w="50%"
                boxShadow={"6px 6px 0 4px black"}
                borderRadius={"20px"}
              >
                <Text color={'white'} align={"start"} pl="20px" pt="15px" fontWeight={600}>
                  Rating: {Data.rating.average || "null"}
                </Text>
                <Text color={'white'} align={"start"} pl="20px" fontWeight={600}>
                  Date: {Data.premiered}
                </Text>
              </Box>
            </Flex>

            <Box>
              <Text
                boxShadow={"6px 6px 10px 7px white"}
                borderRadius={"20px"}
                color={'white'}
                mt="30px"
                mb="40px"
                p="20px"
                align={"justify"}
                fontWeight={600}
              >
                summary: {Data.summary}
              </Text>
            </Box>
            <Link to="/book" state={Data}>
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
                Book Now
              </Text>
              <BsArrowUpRight />
            </Flex>
            </Link>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default DetailsPage;

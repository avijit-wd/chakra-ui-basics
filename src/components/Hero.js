import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Container
      maxW="1380px"
      display="flex"
      h="100vh"
      alignItems="center"
      flexDirection={{ base: "column-reverse", md: "row" }}
    >
      <Stack height="350px" justify="space-around" mt={{ base: "8", md: "0" }}>
        <Heading fontSize={{ base: "2xl", sm: "3xl", md: "6xl" }} as="h1">
          Get Crypto Related Knowledge
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          as="p"
          maxW={{ base: "100%", md: "80%" }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
          accusantium eveniet provident iure fugit vel voluptatem esse quisquam
          dolore nihil, voluptas autem rerum qui quos possimus excepturi non eum
          consequatur.
        </Text>
        <Box>
          <Button colorScheme="orange">Check Post</Button>
        </Box>
      </Stack>
      <Flex justifyContent="center" mt={{ base: "8", md: "0" }}>
        <Image
          width={{ base: "80%", md: "auto" }}
          src="/images/btc.svg"
          mr="4"
        />
      </Flex>
    </Container>
  );
};

export default Hero;

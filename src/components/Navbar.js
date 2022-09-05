import {
  Box,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  return (
    <Container
      as="nav"
      maxW="1380px"
      display="flex"
      justifyContent="space-between"
      boxShadow="lg"
      borderRadius="lg"
      pos="sticky"
      top="0"
      zIndex="50"
      bg="white"
    >
      <Flex align="center">
        <Image mr="4" src="/images/btc.svg" w="50px" h="50px" />
        <Text>Home</Text>
      </Flex>
      <Flex align="center">
        <Text mr="2">Posts</Text>
        <Text mr="2">Trendings</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AiOutlineSearch />}
          />
          <Input
            w={{ base: "100px", sm: "160px", md: "auto" }}
            type="tel"
            placeholder="Phone number"
          />
        </InputGroup>
      </Flex>
    </Container>
  );
};

export default Navbar;

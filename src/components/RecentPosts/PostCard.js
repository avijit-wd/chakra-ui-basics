import {
  Avatar,
  Button,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const PostCard = () => {
  return (
    <Stack minW="20rem" boxShadow="lg" borderRadius="lg" overflow="hidden">
      <Image src="/images/pic1.webp" />
      <Stack p="4">
        <Heading mb="4" fontSize="xl">
          What is Palkadot?
        </Heading>
        <Flex mb="4" align="center">
          <Avatar size="sm" mr="2" src="/images/avatar.png" />
          <Text fontSize="md" mr="2" fontweight="bold">
            Avijit Biswas
          </Text>
          <Text fontSize="md">05 Sept 2022</Text>
        </Flex>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quas.
        </Text>

        <Flex mb="4">
          <Tag>#placeholder</Tag>
          <Tag>#placeholder</Tag>
        </Flex>
        <Button alignSelf="flex-end" colorScheme="orange">
          Read More
        </Button>
      </Stack>
    </Stack>
  );
};

export default PostCard;

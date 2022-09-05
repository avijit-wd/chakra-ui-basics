import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import PostCard from "./PostCard";

const RecentPosts = () => {
  return (
    <Container maxW="1380px">
      <Heading fontSize="2xl" m="8">
        Recent Post
      </Heading>
      <Grid gap="4" gridTemplateColumns="repeat(auto-fit, minmax(20rem,1fr))">
        <GridItem display="flex" justifyContent="center">
          <PostCard />
        </GridItem>
        <GridItem display="flex" justifyContent="center">
          <PostCard />
        </GridItem>
        <GridItem display="flex" justifyContent="center">
          <PostCard />
        </GridItem>
        <GridItem display="flex" justifyContent="center">
          <PostCard />
        </GridItem>
        <GridItem display="flex" justifyContent="center">
          <PostCard />
        </GridItem>
        <GridItem display="flex" justifyContent="center">
          <PostCard />
        </GridItem>
      </Grid>
      <Heading m="8" fontSize="2xl" textAlign="center">
        Read More
      </Heading>
    </Container>
  );
};

export default RecentPosts;

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RecentPosts from "./components/RecentPosts/RecentPosts";

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
      <RecentPosts />
    </ChakraProvider>
  );
};

export default App;

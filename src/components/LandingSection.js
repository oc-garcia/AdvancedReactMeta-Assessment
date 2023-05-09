import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Octávio!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
onst LandingSection = () => (
  <FullScreenSection justifyContent="center" alignItems="center" isDarkBackground backgroundColor="#2A4365">
    <Avatar src="https://github.com/oc-garcia.png" size="xl" />
    <VStack>
      <Heading size="md">{greeting}</Heading>
      <br />
      <br />
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

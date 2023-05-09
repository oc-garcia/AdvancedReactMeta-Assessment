import { Heading, HStack, Image, Link, VStack, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, url, imageSrc }) => {
  return (
    <VStack backgroundColor="white" borderRadius="10px">
      <Image height="70%" width="100%" borderRadius="10px 10px 0 0" src={imageSrc} />
      <Heading padding="0.5rem 0.5rem" alignSelf="flex-start" size="md" color="black">
        {title}
      </Heading>
      <Link padding="0rem 0rem 1rem 0.5rem" alignSelf="flex-start" color="grey" href={url} isExternal>
        Link to the repository page on GitHub.
      </Link>
      <HStack alignSelf="flex-start">
        <Text padding="0rem 0rem 0rem 0.5rem" alignSelf="flex-start" color="black">
          See more
        </Text>
        <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;

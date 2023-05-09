import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: octaviogarcia1988@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/oc-garcia",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/octáviogarcia/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@octaviogarcia1988",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/20766795/o-g?tab=profile",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.log("not found");
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b">
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            {socials.map((social) => {
              return (
                <a style={{ margin: 1 + "em" }} key={social.url} href={social.url}>
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              );
            })}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick(`projects`)}>Projects</a>
              <a onClick={handleClick(`contactme`)}>Contact me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

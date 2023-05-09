import React, { useEffect, useState } from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const getRandomPhoto = () => {
  const index = Math.floor(Math.random() * 4) + 1;
  return require(`../images/photo${index}.jpg`);
};

const ProjectsSection = () => {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const response = await fetch("https://api.github.com/users/oc-garcia/repos");
      const data = await response.json();
      setRepositories(data);
    };
    getProjects();
  }, []);

  return (
    <FullScreenSection backgroundColor="#14532d" isDarkBackground p={8} alignItems="flex-start" spacing={8}>
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box display="grid" gridTemplateColumns="repeat(2,minmax(0,1fr))" gridGap={8}>
        {repositories.map((project) => (
          <Card key={project.id} title={project.name} url={project.html_url} imageSrc={getRandomPhoto()} />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;

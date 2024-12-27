import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./projectsData";

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projectsData.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={project.title}>
              <ProjectCard {...project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;

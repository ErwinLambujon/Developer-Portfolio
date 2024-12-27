import React from "react";
import { Typography, Stack, Box } from "@mui/material";

const AboutContent = () => {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      gap={2}
      sx={{ textAlign: "justify" }}
    >
      <Box
        component="img"
        src="/profile.JPG"
        alt="Erwin Lambujon"
        sx={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <Stack spacing={2}>
        <Typography>
          I am a passionate software developer specializing in both front end
          and back-end development, with a keen focus on AI integration.
          Proficient in React.js, Django, and Express.js, I build dynamic,
          responsive, and scalable web applications. My experience includes
          hands-on integration of AI models like OpenAI’s GPT, Claude, and AWS
          Titan to enable intelligent automation and enhance user experiences.
          Driven by innovation, I am committed to merging cutting-edge AI
          technologies with intuitive design to deliver powerful, user-centric
          solutions.
        </Typography>
        <Typography>
          My journey in software development began with a deep curiosity for
          problem-solving and has evolved into a career focused on creating
          impactful digital experiences.
        </Typography>
        <Typography>
          When I'm not coding, you can find me contributing to open-source
          projects, or exploring new technologies.
        </Typography>
      </Stack>
    </Box>
  );
};

export default AboutContent;

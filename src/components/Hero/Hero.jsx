import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "grey.50",
        pt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          textAlign="center"
        >
          <Typography variant="h1" color="text.primary" gutterBottom>
            Software Engineer
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Turning ideas into elegant solutions through code
          </Typography>
          <ScrollLink to="projects" smooth={true} duration={1000} offset={-70}>
            <Button
              variant="contained"
              size="large"
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </Button>
          </ScrollLink>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

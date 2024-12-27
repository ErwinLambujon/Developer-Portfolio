import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';
import AboutContent from './AboutContent';

const About = () => {
  return (
    <Box id="about" sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" textAlign="center" gutterBottom>
            About Me
          </Typography>
          <Paper elevation={0} sx={{ p: 4 }}>
            <AboutContent />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
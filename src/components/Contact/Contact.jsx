import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 8, bgcolor: "grey.50" }}>
      <Container maxWidth="md">
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" textAlign="center" gutterBottom>
            Get In Touch
          </Typography>
          <Paper elevation={0} sx={{ p: 4, textAlign: "center" }}>
            <Typography paragraph>
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out!
            </Typography>
            <SocialLinks />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;

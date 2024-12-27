import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tech, link, index }) => {
  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      elevation={2}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="body2"
          textAlign="justify"
          color="text.secondary"
          paragraph
        >
          {description}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
          {tech.map((item) => (
            <Chip key={item} label={item} size="small" sx={{ mb: 1 }} />
          ))}
        </Stack>
        <Link href={link} color="primary" underline="hover">
          View Project →
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

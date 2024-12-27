import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

const SkillCard = ({ category, items, index }) => {
  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      elevation={2}
      sx={{ p: 3 }}
    >
      <Typography variant="h6" gutterBottom>
        {category}
      </Typography>
      <List dense>
        {items.map((skill) => (
          <ListItem key={skill} disablePadding>
            <ListItemText primary={skill} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default SkillCard;
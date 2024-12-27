import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import SkillCard from './SkillCard';
import { skillsData } from './skillsData';

const Skills = () => {
  return (
    <Box id="skills" sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={3}>
          {skillsData.map((skill, index) => (
            <Grid item xs={12} sm={6} md={3} key={skill.category}>
              <SkillCard {...skill} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
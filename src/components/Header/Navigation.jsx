import React from 'react';
import { Link } from 'react-scroll';
import { Button, Stack, useTheme, useMediaQuery } from '@mui/material';

const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const menuItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <Stack 
      direction="row" 
      spacing={2}
      sx={{ display: isMobile ? 'none' : 'flex' }}
    >
      {menuItems.map((item) => (
        <Link
          key={item}
          to={item.toLowerCase()}
          smooth={true}
          duration={500}
          style={{ textDecoration: 'none' }}
        >
          <Button color="inherit">
            {item}
          </Button>
        </Link>
      ))}
    </Stack>
  );
};

export default Navigation;
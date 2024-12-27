import React from "react";
import { AppBar, Toolbar, Typography, Container, Link } from "@mui/material";
import Navigation from "./Navigation";

const profileLink = ["https://github.com/ErwinLambujon/"];
const Header = () => {
  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            <Link href={profileLink} color="primary" underline="hover">
              Erwin H. Lambujon
            </Link>
          </Typography>
          <Navigation />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

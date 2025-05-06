import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'blue' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          Mitesh's Portfolio
        </Typography>

     
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button
            component={Link}
            to="/about"
            color="inherit"
            sx={{
              fontWeight: 'bold',
              '&:hover': {
                textDecoration: 'underline',
                color: 'white',
              },
            }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/projects"
            color="inherit"
            sx={{
              fontWeight: 'bold',
              '&:hover': {
                textDecoration: 'underline',
                color: 'white',
              },
            }}
          >
            Projects
          </Button>
          <Button
            component={Link}
            to="/contact"
            color="inherit"
            sx={{
              fontWeight: 'bold',
              '&:hover': {
                textDecoration: 'underline',
                color: 'white',
              },
            }}
          >
            Contact
          </Button>
        </Box>

        
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton edge="end" color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

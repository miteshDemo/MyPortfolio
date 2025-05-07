import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Typography, TextField, Button, AppBar, Toolbar } from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

// Motion-enhanced MUI components
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

// Navbar component
const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "blue" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
        >
          Mitesh's Portfolio
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
        <Button
            component={Link}
            to="/home"
            color="inherit"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                textDecoration: "underline",
                transition : "all 0.3s ease",
                color: "blue",
              },
            }}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/about"
            color="inherit"
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                textDecoration: "underline",
                transition : "all 0.3s ease",
                color: "blue",
              },
            }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/contact"
            color="inherit"
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              "&:hover": {
                textDecoration: "underline",
                transition : "all 0.3s ease",
                "&:hover": {
                  textDecoration: "underline",
                },
                color: "blue",
              },
            }}
          >
            Contact
          </Button>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton edge="end" color="inherit">
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// Contact Page Component
const Contact = () => {
  return (
    <>
      {/* Navbar with AppBar */}
      <Navbar />

      {/* Main Content */}
      <MotionBox
        sx={{ minHeight: "calc(100vh - 64px)", backgroundColor: "#f9f9f9", py: 8 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container maxWidth="sm">
          <MotionTypography
            variant="h3"
            sx={{ fontWeight: "bold", textAlign: "center", color: "blue", mb: 4 }}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Contact Me
          </MotionTypography>

          <MotionBox
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              backgroundColor: "#fff",
              padding: 4,
              borderRadius: 2,
              boxShadow: 3,
            }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              type="email"
              fullWidth
              required
              sx={{ mb: 2 }}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ alignSelf: "center" }}
            >
              Send Message
            </Button>
          </MotionBox>
        </Container>
      </MotionBox>
    </>
  );
};

export default Contact;

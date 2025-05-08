import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  AppBar,
  Toolbar,
  Divider,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";

// Motion-enhanced MUI components
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);

// Navbar component
const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "blue" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          Mitesh's Portfolio
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {["/home", "/about", "/contact"].map((path, idx) => (
            <Button
              key={idx}
              component={Link}
              to={path}
              color="inherit"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                "&:hover": {
                  textDecoration: "underline",
                  transition: "all 0.3s ease",
                  color: "white",
                },
              }}
            >
              {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// Contact Page Component
const Contact = () => {
  return (
    <>
      <Navbar />
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
            Get in Touch
          </MotionTypography>

          <Box
            sx={{
              backgroundColor: "#fff",
              p: 4,
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Details
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Box display="flex" alignItems="center" mb={2}>
              <EmailIcon sx={{ mr: 1, color: "blue" }} />
              <Typography
                variant="body1"
                component="a"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=thakormitesh2702@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                thakormitesh2702@gmail.com
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={2}>
              <PhoneIcon sx={{ mr: 1, color: "blue" }} />
              <Typography
                variant="body1"
                component="a"
                href="tel:+919313443520"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                +91 93134 43520
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={3}>
              <LocationOnIcon sx={{ mr: 1, color: "blue" }} />
              <Typography variant="body1">Navsari, Gujarat, India</Typography>
            </Box>

            <Button
              variant="outlined"
              startIcon={<DescriptionIcon />}
              href="https://drive.google.com/file/d/1EIhqL0T-JUFPPwzrmsX03COJByo4FAWu/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mt: 2,
                borderColor: "blue",
                color: "blue",
                "&:hover": {
                  backgroundColor: "blue",
                  color: "white",
                },
              }}
            >
              Explore My Resume
            </Button>
          </Box>
        </Container>
      </MotionBox>
    </>
  );
};

export default Contact;

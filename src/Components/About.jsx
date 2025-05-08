import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Divider,
  Grid,
  Paper,
  AppBar,
  Toolbar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { motion } from "framer-motion";

// Motion-enhanced MUI components
const MotionTypography = motion(Typography);
const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

// Navbar without icon, always shows NavLinks
const Navbar = () => (
  <AppBar position="static" sx={{ backgroundColor: "blue" }}>
    <Toolbar sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Mitesh's Portfolio
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {["Home", "about", "contact"].map((route) => (
          <Button
            key={route}
            component={Link}
            to={`/${route}`}
            color="inherit"
            sx={{
              fontWeight: "bold",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {route.charAt(0).toUpperCase() + route.slice(1)}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);

const About = () => {
  return (
    <>
      <Navbar />

      <MotionBox
        sx={{ minHeight: "calc(100vh - 64px)", backgroundColor: "#f9f9f9", py: 8 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} sm={4}>
                <Avatar
                  alt="Mitesh"
                  src="/mitesh.jpeg"
                  sx={{
                    width: 150,
                    height: 150,
                    border: "3px solid blue",
                    margin: "0 auto",
                  }}
                />
              </Grid>

              <MotionGrid
                item
                xs={12}
                sm={8}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Typography variant="h4" sx={{ fontWeight: "bold", color: "blue" }}>
                  About Me
                </Typography>
                <Typography variant="body1" paragraph>
                  I'm Mitesh, a passionate Full Stack Developer experienced in building scalable, user-friendly web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
                </Typography>
                <Typography variant="body1" paragraph>
                  I focus on clean code, responsive design, and delivering seamless user experiences with attention to performance and maintainability.
                </Typography>
              </MotionGrid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            <MotionBox initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                GitHub
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Link:{" "}
                <a href="https://github.com/miteshDemo?tab=repositories" target="_blank" rel="noopener noreferrer">
                  github.com/miteshDemo
                </a>
              </Typography>

              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Skills & Tools
              </Typography>
              <Table sx={{ mb: 4 }}>
                <TableBody>
                  <TableRow>
                    <TableCell>Frontend</TableCell>
                    <TableCell>React, HTML5, CSS3, Tailwind, MUI</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Backend</TableCell>
                    <TableCell>Node.js, Express.js</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Database</TableCell>
                    <TableCell>MongoDB</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Other Tools</TableCell>
                    <TableCell>Git, REST APIs, GitHub</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Hobbies
              </Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Sports</TableCell>
                    <TableCell>Cricket, Volleyball</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Outdoor</TableCell>
                    <TableCell>Traveling, Trekking</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Creative</TableCell>
                    <TableCell>Videography</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </MotionBox>
          </Paper>
        </Container>
      </MotionBox>
    </>
  );
};

export default About;

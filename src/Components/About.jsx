import React from "react";
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
} from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* AppBar at the top */}
      <AppBar position="static" sx={{ backgroundColor: "blue" }}>
        <Toolbar>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              About Me - Mitesh's Portfolio
            </Typography>
          </motion.div>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ minHeight: "calc(100vh - 64px)", backgroundColor: "#f9f9f9", py: 8 }}>
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} sm={4}>
                <Avatar
                  alt="Mitesh"
                  src="/Mitesh.jpeg"
                  sx={{
                    width: 150,
                    height: 150,
                    border: "3px solid blue",
                    margin: "0 auto",
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={8}>
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "blue" }}
                  >
                    About Me
                  </Typography>
                  <Typography variant="body1" paragraph>
                    I'm Mitesh, a passionate Full Stack Developer with a strong
                    background in building efficient, scalable, and modern web
                    applications using the MERN stack (MongoDB, Express.js,
                    React.js, Node.js).
                  </Typography>
                  <Typography variant="body1" paragraph>
                    With a dedication to writing clean and maintainable code, I
                    enjoy tackling complex challenges and turning ideas into
                    reality. My focus is on user experience, responsiveness, and
                    performance.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                Skills & Tools
              </Typography>
              <Typography variant="body1">
                React, Node.js, Express, MongoDB, JavaScript, HTML5, CSS3,
                Tailwind, Git, REST APIs, MUI.
              </Typography>
            </motion.div>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default About;

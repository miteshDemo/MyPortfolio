import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Calorie Tracker App",
    description:
      "A user-friendly calorie tracking application where users can register, upload food images, and get estimated calorie counts using API.",
    techStack: "React, Redux, Tailwind CSS, RESTAPI",
    link: "https://github.com/miteshDemo/YorkCalorieApp1",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my projects, skills, and experience as a Full Stack Developer.",
    techStack: "React, MUI, Framer Motion, React Router",
    link: "https://yourportfolio.com",
  },
];

const Home = () => {
  return (
    <>
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: "blue" }}>
        <Toolbar>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Mitesh's Portfolio - Home
            </Typography>
          </motion.div>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          backgroundColor: "#f0f0f0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 6,
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "blue",
                textAlign: "center",
                mb: 4,
              }}
            >
              My Projects
            </Typography>
          </motion.div>

          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                >
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      boxShadow: 3, // Added shadow for better visual appeal
                    }}
                  >
                    <CardContent
                      sx={{
                        flexGrow: 1, // Ensures the content grows to fill space
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {project.description}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        sx={{ mt: 1, display: "block" }}
                      >
                        Tech Stack: {project.techStack}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;

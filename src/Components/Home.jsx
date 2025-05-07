import React from "react";
import { Link } from "react-router-dom";
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
  IconButton,
  Paper,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

// Motion-enhanced components
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionGrid = motion(Grid);
const MotionCard = motion(Card);

const projects = [
  {
    title: "Calorie Tracker App",
    description:
      "A user-friendly calorie tracking application where users can register, upload food images, and get estimated calorie counts using API.",
    techStack: "React, Redux, Tailwind CSS, MUI, Framer-Motion, React-Router, RESTAPI",
    link: "https://github.com/miteshDemo/YorkCalorieApp1",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my projects, skills, and experience as a Full Stack Developer.",
    techStack: "React, MUI, Framer Motion, React Router",
    link: "https://github.com/miteshDemo/MyPortfolio",
  },
];

const Navbar = () => (
  <AppBar position="static" sx={{ backgroundColor: "blue" }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
        Mitesh's Portfolio
      </Typography>

      <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
        {["about", "contact"].map((route) => (
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

      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton edge="end" color="inherit">
          <MenuIcon />
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
);

const Home = () => {
  return (
    <>
      <Navbar />

      <MotionBox
        sx={{ minHeight: "calc(100vh - 64px)", backgroundColor: "#f0f0f0", py: 8 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container maxWidth="lg">
          <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
            <MotionTypography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "blue",
                textAlign: "center",
                mb: 4,
              }}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              My Projects
            </MotionTypography>

            <Divider sx={{ mb: 4 }} />

            <Grid container spacing={3} justifyContent="center">
              {projects.map((project, index) => (
                <MotionGrid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 * index, duration: 0.6 }}
                >
                  <MotionCard
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      boxShadow: 3,
                      borderRadius: 3,
                    }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <CardContent>
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
                  </MotionCard>
                </MotionGrid>
              ))}
            </Grid>
          </Paper>
        </Container>
      </MotionBox>
    </>
  );
};

export default Home;

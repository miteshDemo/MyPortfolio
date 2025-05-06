import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Avatar,
  AppBar,
  Toolbar,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Start = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/home");
    }, 2000); // 2-second delay before redirect
  };

  return (
    <>
      {/* App Bar at the Top */}
      <AppBar position="static" sx={{ backgroundColor: "blue" }}>
        <Toolbar>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Welcome to Mitesh's Portfolio
            </Typography>
          </motion.div>
        </Toolbar>
      </AppBar>

      {/* Main Section */}
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          paddingY: 8,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Avatar
            alt="Mitesh"
            src="/Mitesh.jpeg"
            sx={{
              width: 120,
              height: 120,
              margin: "0 auto",
              marginBottom: 2,
              border: "3px solid blue",
            }}
          />

          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold", color: "blue" }}
            >
              Hi, I'm Mitesh
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <Typography
              variant="h5"
              component="p"
              gutterBottom
              sx={{ marginBottom: 4 }}
            >
              A passionate Full Stack Developer focused on building clean and
              user-friendly web applications using the MERN stack.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleRedirect}
                sx={{ fontWeight: "bold", px: 4 }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                    Loading...
                  </>
                ) : (
                  "See My Portfolio"
                )}
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default Start;

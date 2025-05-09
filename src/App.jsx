import React, { useMemo, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import Start from './Components/Start';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

const App = () => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) setMode(savedMode);
  }, []);

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  const theme = useMemo(() => 
    createTheme({
      palette: { mode },
    }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={<Start toggleMode={toggleMode} mode={mode} />} />
          <Route path='/home' element={<Home toggleMode={toggleMode} mode={mode} />} />
          <Route path='/about' element={<About toggleMode={toggleMode} mode={mode} />} />
          <Route path='/contact' element={<Contact toggleMode={toggleMode} mode={mode} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

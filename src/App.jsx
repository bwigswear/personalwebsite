import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

import ParticlesComponent from './ParticlesComponent.jsx';
import NavHeader from './components/navbar/NavHeader.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import classes from './App.module.css';

const App = () => {
  const path = useLocation();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      backgroundPosition: ["70% 70%", "90% 90%", "70% 70%"],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror"
      }
    });
  }, [controls]);

  return (
    <div>
      <motion.div className={classes.background}
      style={{
        background: 'radial-gradient(125% 130% at 40% 0%, #000000 50%, #67209e)',
        backgroundSize: '200% 200%',
      }}
      animate={controls}
        >
        <ParticlesComponent className={classes.particles}/>
        {path.pathname !== '/' && <Sidebar />}
        {path.pathname !== '/' && <NavHeader />}
        <Outlet exit={{ x: -300, opacity: 0 }}/>
      </ motion.div>
    </ div>
  );
};

export default App
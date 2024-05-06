import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion'

import NavHeader from '../components/navbar/NavHeader.jsx';
import classes from './App.module.css';

const App = () => {
  const path = useLocation();


  return (
    <div>
      <motion.div className={classes.background}
        initial={{ background: 'linear-gradient(45deg, #6b0d7a, #ff00ff)' }}
        animate={{ background: 'linear-gradient(45deg, #ff00ff, #6b0d7a)' }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        >
        {path.pathname !== '/' && <NavHeader />}
        <Outlet />
        {/*<h1>Hello World!</h1>
        <ButtonList />
        <SettingsButton onClick={openSettings}/>*/}
      </ motion.div>
    </ div>
  );
};

export default App;

/*const [settingsAreOpen, setSettingsAreOpen] = useState(false);

  function openSettings(event){
    setSettingsAreOpen(true);
  };

  function closeSettings(event){
    setSettingsAreOpen(false);
  };       

{{settingsAreOpen && (<SettingsBackdrop onClose={closeSettings}><Settings onClose={closeSettings}/></SettingsBackdrop>)}*/
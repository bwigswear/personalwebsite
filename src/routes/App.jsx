import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import NavHeader from '../components/NavHeader';
import classes from './App.module.css';

const App = () => {
  const path = useLocation();

  return (
    <div className={classes.background}>
      {path.pathname != '/' ? <NavHeader /> : null}
      <Outlet />
        {/*<h1>Hello World!</h1>
        <ButtonList />
        <SettingsButton onClick={openSettings}/>*/}
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
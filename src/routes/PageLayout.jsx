import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import NavHeader from '../components/NavHeader';
import classes from './PageLayout.module.css';

const App = () => {

  return (
    <>
      <NavHeader />
      <Outlet />
        {/*<h1>Hello World!</h1>
        <ButtonList />
        <SettingsButton onClick={openSettings}/>*/}
    </>
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
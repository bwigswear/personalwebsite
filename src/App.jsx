import { useState } from 'react';

import NavHeader from './components/NavHeader';
import HomePage from './components/homepage/HomePage';

const App = () => {

  return (
    <>
      <NavHeader />
      <HomePage />
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
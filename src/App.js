import './App.css';
import { useState } from 'react';
import OuterCircle from './OuterCircle';

function App() {

  const [menuOption, setMenuOption] = useState('none')
  const outerCircleNames = ['Achievement', 'Conservation', 'Caring', 'Freedom', 'Respect', 'Tradition', 'Enjoyment', 'Stability', 'Equality/Justice'];
  const freeSpiritLayout = ['smallest', 'small', 'small', 'largest', 'large', 'large', 'smallest', 'small', 'smallest'];
  const achieverLayout = ['largest', 'small', 'smallest', 'smallest', 'large', 'largest', 'large', 'small', 'small'];
  const caregiverLayout = ['smallest', 'small', 'largest', 'small', 'smallest', 'smallest', 'small', 'large', 'small'];
  const unselectedLayout = [];
  let currLayout;

  switch (menuOption) {
    case 'freeSpirit':
      currLayout = freeSpiritLayout;
      break;
    case 'achiever':
      currLayout = achieverLayout;
      break;
    case 'caregiver':
      currLayout = caregiverLayout;
      break;
    default:
      currLayout = unselectedLayout;
  }

  return (
    <div className="App">
      <div className="button-container">
        <button onClick={() => setMenuOption('freeSpirit')} className="menu-button">Free spirit</button>
        <button onClick={() => setMenuOption('achiever')} className="menu-button">Achiever</button>
        <button onClick={() => setMenuOption('caregiver')} className="menu-button">Caregiver</button>
      </div>
      <div className="outer-circle-container">
        {outerCircleNames.map(name => {
          return <OuterCircle key={name} name={name}/>
        })}
      </div>
    </div>
  );
}

export default App;

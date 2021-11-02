import './App.css';
import { useState } from 'react';
import Circles from './Circles';

function App() {

  const [menuOption, setMenuOption] = useState('')
  const outerCircleNames = ['Achievement', 'Conservation', 'Caring', 'Freedom', 'Respect', 'Tradition', 'Enjoyment', 'Stability', 'Equality/Justice'];
  const freeSpiritLayout = ['smallest', 'small', 'small', 'largest', 'large', 'large', 'smallest', 'small', 'smallest'];
  const achieverLayout = ['largest', 'small', 'smallest', 'smallest', 'large', 'largest', 'large', 'small', 'small'];
  const caregiverLayout = ['smallest', 'small', 'largest', 'small', 'smallest', 'smallest', 'small', 'large', 'small'];
  const unselectedLayout = ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'];
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
        {outerCircleNames.map((name, currIndex) => {
          return (
            <Circles key={name} name={name} index={currIndex} currLayout={currLayout}/> 
          )
        })}
      </div>
    </div>
  )
}

export default App;

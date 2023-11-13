import './App.css';
import { useState } from 'react';
import Tooltip from './Tooltip';

function App() {
  let position="bottom";
  let [showTooltip,setShowTooltip]=useState(false);
  return (
    <div className='App'>
      <div className="" onMouseEnter={() =>setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
        Hover over me !
      </div>
      {showTooltip && <Tooltip position={position}/>}
    </div>
  );
}

export default App;

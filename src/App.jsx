import { useState } from 'react';
import CoreConcepts from './Components/CoreConcepts.jsx';
import Examples from './Components/Examples.jsx';
import Header from './Components/Header/Header.jsx';

import TabButton from './Components/TabButton.jsx';
import {EXAMPLES} from  './data.js'
 import "./index.css";




function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </div>
  );
}


export default App;

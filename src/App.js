import logo from './logo.svg';
import './App.css';

import Unity, { UnityContent } from "react-unity-webgl";

import { useEffect } from 'react';
function App() {

  let unityContent = new UnityContent(
    '/animalcell0/local.json',
      "/UnityLoader.js"
    );


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
             <Unity unityContent={unityContent} />
         
        </p>
    
      </header>
 
    </div>
  );
}

export default App;

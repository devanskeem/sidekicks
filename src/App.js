import React from 'react';
import './App.css';
import Landing from './Components/Landing/Landing'
import {HashRouter} from 'react-router-dom'
import router from './router'
import Navbar from './Components/Nav/Navbar';


function App() {
  return (
    <div className="App">
      <HashRouter>
        {router}
        <Navbar/>
      </HashRouter>
    </div>
  );
}

export default App;

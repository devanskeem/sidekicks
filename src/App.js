import React from 'react';
import './App.css';
import Login from './Components/Login/Login'
import {HashRouter} from 'react-router-dom'
import router from './router'


function App() {
  return (
    <div className="App">
      <Login/>
      <HashRouter>
        {router}
      </HashRouter>
    </div>
  );
}

export default App;

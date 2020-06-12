import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import Main from './components/Main'
import NavBottom from './components/NavBotton';

function App() {
  return (

    <Router>

      <SideBar />
      <Route path="/album" exact component={Main} />
      <NavBottom />
    </Router>


  );
}

export default App;

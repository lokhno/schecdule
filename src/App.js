import React from 'react';


import MainPage from './pages/MainPage'
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <MainPage/>
    </Router>

  );
}

export default App;

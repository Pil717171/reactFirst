import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className = "app-wrapper">
      <Header></Header>
      <Navbar></Navbar>
      <div className="app-wrapper-content">
        {/* <Profile></Profile> */}
        <Dialogs></Dialogs>
      </div>
    </div>
  );
}

export default App;

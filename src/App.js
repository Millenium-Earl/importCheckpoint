import './App.css';
import React from 'react';
import FullName from './Profile/FullName'
import Adress from './Profile/Adress'
import {ProfilePhoto} from './Profile/ProfilePhoto'

function App() {
  return (
    <div className="App">
      <FullName />
     <Adress />
      <ProfilePhoto />
      
    </div>
  );
}

export default App;

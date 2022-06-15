import React from 'react';
import logo from './logo.svg';
import './App.css';
import './types'
import {systems} from './tracks/systems'
import Course from './Course';
import Track from './Track';
import Tracks from './Tracks';

function App() {

  const object = {"hello": 10}
  console.log(systems.requirements[0].numRequired)

  return (
    <div className="App">
      <Tracks />
    </div>
  );
}

export default App;

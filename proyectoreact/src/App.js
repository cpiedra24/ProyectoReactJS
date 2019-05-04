import React from 'react';
import './App.css';
import Navigation from './componets/Navigation';
import Img from './assets/img/4.jpg';




function App() {
  return (
    <div className="App">
      <Navigation />
      <img src={Img} alt="imagen" />
    </div>
  );
}
export default App;

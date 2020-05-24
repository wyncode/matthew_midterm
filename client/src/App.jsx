import React from "react";
import "./App.css";
import {Navbar} from 'react-bootstrap';
import Results from './components/Results';
import Logo from './pictures/profile.png'


function App() {
  return (
    <>
    <Navbar className="navbar">
    <Navbar.Brand href="#home" className="navColor">
      <img
        alt=""
        src={Logo}
        width="50"
        height="50"
      />
      Earnings Check
    </Navbar.Brand>
  </Navbar>
  <Results/>
  </>
  )
}
export default App;

import React from 'react';
import Navigation from './navigation';

function Navbar(props) {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-white w3-card" id="myNavbar">
        <a href="#home" className="w3-bar-item w3-button w3-wide">{props.name}</a>

        <Navigation first="ABOUT PROJECT" second="PRICING" third="TEAM" fourth="CONTACT US" />
      </div>
    </div>
  );
}

export default Navbar;    
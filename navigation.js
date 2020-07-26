import React from 'react';
import LoginToogle from './Login_Toogle';

function Navigation(props) {
  return (
    <div>
        <div className="w3-right w3-hide-small">
            <a href="#AboutProject" className="w3-bar-item w3-button"><i className="fa fa-tag"></i> {props.first}</a>
            <a href="#pricing" className="w3-bar-item w3-button"><i className="fa fa-usd"></i> {props.second}</a>
            <a href="#Team" className="w3-bar-item w3-button"><i className="fa fa-group"></i> {props.third}</a>
            <a href="#contactusredirection" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> {props.fourth}</a>
            <LoginToogle />
        </div>
    
        <a href="javascript:w3_open()" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium">
          <i className="fa fa-bars"></i>
        </a>

        <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{display:"none"}} id="mySidebar">
            <a href="javascript:w3_close()" className="w3-bar-item w3-button w3-large w3-padding-16">X</a>
            <a href="#AboutProject" className="w3-bar-item w3-button"><i className="fa fa-tag"></i> {props.first}</a>
            <a href="#pricing" className="w3-bar-item w3-button"><i className="fa fa-usd"></i> {props.second}</a>
            <a href="#Team" className="w3-bar-item w3-button"><i className="fa fa-group"></i> {props.third}</a>
            <a href="#contactusredirection" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> {props.fourth}</a>
            <LoginToogle name="mobile" />
        </nav>
    </div>
  );
}

export default Navigation;
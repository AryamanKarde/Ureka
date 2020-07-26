import React from 'react';
import './App.css';

function Header(){
    return(
        <header class="bgimg-1 w3-display-container w3-grayscale-min" id="home">
            <div class="w3-text-white" style={{padding:"48px"}}>
                <span class="w3-jumbo w3-hide-small">Quality Education. Quality Life.</span><br />
                <span class="w3-xxlarge w3-hide-large w3-hide-medium">Quality Education. Quality Life.</span><br />
                <span class="w3-large">Online Courses For Every Field. <br /> What Are You Waiting For? </span>
                <p>
                    <button onClick="document.getElementById('StudentSignUp').style.display='block'" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">
                        Want to Join?
                    </button>
                </p>
            </div>
            <div class=" w3-text-grey w3-large" style={{padding:"24px 48px"}}>
                <a href="facebook.com"><i class="fa fa-facebook-official w3-hover-opacity"></i></a>
                <a href="instagram.com"><i class="fa fa-instagram w3-hover-opacity"></i></a>
                <a href="instagram.com"><i class="fa fa-snapchat w3-hover-opacity"></i></a>
                <a href="instagram.com"><i class="fa fa-pinterest w3-hover-opacity"></i></a>
                <a href="instagram.com"><i class="fa fa-twitter w3-hover-opacity"></i></a>
                <a href="instagram.com"><i class="fa fa-linkedin w3-hover-opacity"></i></a>
            </div>
        </header>
    );
}

export default Header;
import React from "react";
import './style/Header.css'
function Header(){
    return(
      <div className="container">

        <div className="left section">
          <p className="portal-name">
            OGDP
          </p>

        </div>

        <div className="middle-section"> 
          <input className="search" placeholder="Search"></input>
        </div>
        
        <div className="right-section">
        <ul className="navigation">
          <li>Home</li>
          <li>Explore</li>
          <li>About</li>
          <li>Contact Us </li>
        </ul>

        </div>
        

      </div>
    );
}

export default Header;
import React from "react";
import './styles/nav.css'

function NavBar(){
  return(
    <nav className="nav">
      <a href="/" className="site-title"> OGDP</a>

      <div className="search-bar">
        <input className="search" placeholder="Search"></input>

      </div>

      <ul>

        <li className="active">
          <a href="/home">Home</a>
        </li>

        <li>
          <a href="/explore">Explore</a>
        </li>

        <li>
          <a href="/about">About</a>
        </li>

        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </nav>

  );
}

export default NavBar;
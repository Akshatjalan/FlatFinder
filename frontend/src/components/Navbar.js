import React from "react";
import "../styles/Navbar.css"; 
import logo from "../assests/flatfinder-logo.jpeg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <img src={logo} alt="FlatFinder Logo" className="logo" />
      </div>
      <div className="nav-center">
        <button className="search-btn">Location</button>
        <button className="search-btn">Move-in Date</button>
        <button className="search-btn">Budget</button>
        <button className="search-icon">🔍</button>
      </div>
      <div className="nav-right">
        
        <Link to="/createPost" className="login-btn"><div>Create a Post</div></Link>
        <button className="globe-btn">🌐</button>
        <div className="menu-icon">☰</div>
      </div>
    </header>
  );
}

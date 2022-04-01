import React, { useState } from "react";
import Auth from "../../utils/auth";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    const body = document.getElementById("body");
    setMenuOpen(!menuOpen); // Toggle menu true or false
    body.classList.toggle("fixed-body"); // Add class to fix scrolling on body
  }
  // Show the links that don't need authentication
  function showNavLinks() {
    return (
      // If menu is open, add flex-column class. Otherwise add flex-row
      <ul className={`${menuOpen ? "flex-column" : "flex-row"}`}>
        <li className="mx-4">
          <NavLink exact to="/" activeClassName="active" >
            Home
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/furnitures" activeClassName="active" >
            Cameras
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/equipments" activeClassName="active" >
            Equipments
          </NavLink>
        </li>
        <li className="mx-4">
          <NavLink to="/about" activeClassName="active" >
            About
          </NavLink>
        </li>
        
        <li className="mx-4">
          <NavLink to="/howitworks" activeClassName="active" >
            How It Works
          </NavLink>
          </li>
          <li className="mx-4">
          <NavLink to="/add" activeClassName="active" >
            Add Items
          </NavLink>
        </li>
      </ul>
    )
  }
  // Show links that require authentication
  function showNavAuth() {
    if (Auth.loggedIn()) {
      return (
        <ul className={`${menuOpen ? "flex-column" : "flex-row"}`}>
          <li className="mx-3">
            <NavLink to="/orderHistory" activeClassName="active" >
              Order History
            </NavLink>
          </li>
          <li className="mx-3">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={
              function () {
                toggleMenu();
                Auth.logout()
              }
              }>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className={`${menuOpen ? "flex-column" : "flex-row"}`}>
          <li className="mx-3">
            <Link to="/signup" >
              Signup
            </Link>
          </li>
          <li className="mx-3">
            <Link to="/login" >
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }
  // Show the links that don't need authentication
  // Show links that require authentication
  // Hamburger icon
  // Navbar that will be shown on desktop
  // Hide the hamburger on desktop
  const NavBar = () => {
    return (
      <nav className="flex-row px-2 hidden">
         <button style={{backgroundColor:"transparent", position:"absolute", top:"0", zIndex:"999"}} type="button" aria-label="Toggle mobile menu" onClick={toggleMenu} className="hidden-mobile"></button>
        
        <div className="flex-row space-between display-none">
            {showNavLinks()}
          <div className="flex-row nav-auth-links">
            {showNavAuth()}
          </div>
        </div>
      </nav>
    )
  }
  // Mobile menu
  return (
    <header>
     <NavBar/>
    </header>
  );
}
export default Nav;
import React from 'react';
import { IoMdMenu } from "react-icons/io";
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar_container">
      <nav className="navbar_nav">
        <div className="navbar_items">
            {/* logo */}
            <div>
                <h1 className="logo">EV-olution</h1>
            </div>
            {/* menu */}
            <div>
                <ul className="menu_items">
                    <li>
                        <a rel="noopener noreferrer" href="#">Home</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">Explore</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">About</a>
                    </li>
                    <button className="button-contact">Contact</button>
                </ul>
            </div>
            {/* mobile */}
            <div className="icon-mobile">
                <IoMdMenu size={40} />
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
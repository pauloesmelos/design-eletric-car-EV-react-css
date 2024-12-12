import React from 'react';
import { FiMenu } from "react-icons/fi";
import MenuMobile from '../menu-mobile/MenuMobile';
import './Navbar.css';

const Navbar = () => {
  const [mobile, setMobile] = React.useState(false);

  const handleMobile = () => {
    setMobile(!mobile);
  }

  return (
    <header className="navbar_container">
      <nav className="navbar_nav">
        <div className="navbar_items">
            {/* logo */}
            <div>
                <h1 className="logo">EV-olution.</h1>
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
            <div onClick={handleMobile} className="icon-mobile">
                <FiMenu color="#000" size={30} />
            </div>
        </div>
        {/* menu mobile */}
        <MenuMobile mobile={mobile} handleMobile={handleMobile} />
      </nav>
    </header>
  )
}

export default Navbar;
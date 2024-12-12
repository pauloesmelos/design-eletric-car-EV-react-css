import React from 'react';
import { IoClose } from "react-icons/io5";
import './MenuMobile.css';

const MenuMobile = ({ mobile, handleMobile }) => {
  return (
    <div className={mobile ? "mobile-container" : "mobile-container close"}>
      <div className="mobile-div">
        <div className="mobile-items">
            {/* logo */}
            <div className="logo">
                <h1 className="mobile-logo">
                    EV-olution
                </h1>
                <div onClick={handleMobile}>
                    <IoClose className="mobile-logo-icon" size={30} />
                </div>
            </div>
            {/* nav links */}
            <div>
                <ul className="mobile_links">
                    <li>
                        <a rel="noopener noreferrer" href="#">Home</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">Explore</a>
                    </li>
                    <li>
                        <a rel="noopener noreferrer" href="#">About</a>
                    </li>
                    <li>
                        <button className="mobile-button-contact">Contact</button>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MenuMobile;
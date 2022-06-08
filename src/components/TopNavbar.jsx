import "../styles/TopNavbar.css";
import Homepage from "../pages/Homepage";

import {
  AiFillSetting,
  AiOutlineSearch,
  AiFillBell,
  AiFillCaretDown,
} from "react-icons/ai";

const TopNavbar = () => {
  return (
    <>
      <div className="top-navbar">
        <div className="top-navbar-left">Dashboard</div>
        <div className="top-navbar-right">
          <div className="search-bar">
            <input type="search" placeholder="Search here..." />
            <AiOutlineSearch className="search-icon" />
          </div>
          <div className="top-navbar-icons">
            <AiFillBell className="icon" />
            <AiFillSetting className="icon" />
          </div>
          <div className="lag-changer">
            Eg <AiFillCaretDown />
          </div>
          <div className="navbar-login">
            <div className="navbar-login-img"></div>
            <div className="navbar-login-name">
              Rahuk K. <br />
              <p>rahuldocs@mail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div>
      
      <Homepage />
      </div>
    </>
  );
};

export default TopNavbar;

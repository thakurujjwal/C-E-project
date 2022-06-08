import React from "react";
import "../styles/Homepage.css";
import Fillpage from "../subpages/Fillpage";
import HomepageMenu from "./../components/HomepageMenu";
import { AiFillCaretDown ,AiFillCaretRight} from "react-icons/ai";

const Homepage = () => {
  return (
    <div className="main-container">
      <div>
    
        <div className="home-page-left">
          <div className="left-first">
            <div className="left-content">
              <p>Type of Joint venture ?</p>
            </div>
            <div className="left-acco">
              <AiFillCaretDown className="left-acco-icon" />
            </div>
          </div>
          <div>
            <div className="left-content">
              <p>Date of Joint venture ?</p>
            </div>
            <div className="left-acco">
              <AiFillCaretDown className="left-acco-icon" />
            </div>
          </div>
          <div>
            <div className="left-content">
              <p>Place of Joint venture ?</p>
            </div>
            <div className="left-acco">
              <AiFillCaretDown className="left-acco-icon" />
            </div>
          </div>
          <div>
            <div className="left-content">
              <p>Name of the company ?</p>
            </div>
            <div className="left-acco">
              <AiFillCaretDown className="left-acco-icon" />
            </div>
          </div>
          <div>
            <div className="left-content last-text">
              <p>Party name ? </p>
            </div>
            <div className="left-acco">
              <AiFillCaretDown className="left-acco-icon" />
            </div>
          </div>
        </div>
        <div className="home-page-footer">
          <h3>Do you want to consult a  Legal Expert ?</h3>
          <button >
         <a> Learn more <AiFillCaretRight/></a>
          </button>
        </div>
      </div>
      <div className="home-page-right">
          <HomepageMenu />
        <Fillpage />
      </div>
    </div>
  );
};

export default Homepage;

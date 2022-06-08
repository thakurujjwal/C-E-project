import "../styles/SideNavbar.css";
import TopNavbar from "./TopNavbar";
import { AiFillHome, AiFillThunderbolt } from "react-icons/ai";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";

const SideNavbar = () => {
  return (
    <>
      <div className="main">
        <div className="sideNavbar">
          <div className="sideNavbar-logo">
            <p>CE</p>
          </div>
          <div className="sideNavbar-item">
            <a href="#">
              <AiFillHome className="icon" />
            </a>
          </div>
          <div className="sideNavbar-item">
            <a href="#">
              <AiFillThunderbolt className="icon" />
            </a>
          </div>
          <div className="sideNavbar-item">
            <a href="#">
              <FaUserAlt className="icon" />
            </a>
          </div>
          <div className="sideNavbar-item">
            <a href="#">
              <SiSimpleanalytics className="icon" />
            </a>
          </div>
          <div className="sideNavbar-item">
            <a href="#">
              <SiSimpleanalytics className="icon" />
            </a>
          </div>
          <div className="sideNavbar-item">
            <a href="#">
              <BsFillChatLeftTextFill className="icon" />
            </a>
          </div>
      
        </div>
        <div>
          <TopNavbar />
        </div>
      </div>
    </>
  );
};

export default SideNavbar;

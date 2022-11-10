import React from "react";
import "./slidebar.css";
import Logo from "../../assets/Logo.jpg";
const Slidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav_logo">
        <img src={Logo} alt="Logo" />
      </a>
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_item">
            <a href="#home" className="nav_link">
              <i className="icon-home"></i>
            </a>
          </li>
          <li className="nav_item">
            <a href="#about" className="nav_link">
              <i className="icon-user-following"></i>
            </a>
          </li>

          <li className="nav_item">
            <a href="#portfolio" className="nav_link">
              <i className="icon-layers"></i>
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav_footer">
        <span className="copyright">&copy; 2022</span>
      </div>
    </aside>
  );
};

export default Slidebar;

import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [handbugalMenu, setHandbugalmenu] = useState(false);
  const handleClick = () => setHandbugalmenu(!handbugalMenu);
  const handleList = () => setHandbugalmenu(false);
  return (
    <nav>
      <div className="logo">
        <Link className="logo" to="/">
          SAMA
        </Link>
      </div>

      <div>
        <i
          className={
            handbugalMenu ? "fas fa-times handbugle" : "fas fa-bars handbugle"
          }
          onClick={handleClick}
        />
        <ul className={handbugalMenu ? "show" : null}>
          <li>
            <Link onClick={handleList} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleList} to="/about">
              About Me
            </Link>
          </li>
          <li>
            <Link onClick={handleList} to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link onClick={handleList} to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

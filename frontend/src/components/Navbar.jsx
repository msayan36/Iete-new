import "./styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="left-nav">
          <img src="/iem_logo.jpeg" alt="iem_logo" className="logo" />
          <h1 className="logo-name">IEM-IETE Students' Forum</h1>
        </div>
      </Link>
      <ul className="right-nav">
        <li className="nav-list-item">
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-list-item">
          <Link className="link" to="/">
            Members
          </Link>
        </li>
        <li className="nav-list-item">
          <Link className="link" to="/">
            Announcements
          </Link>
        </li>
        <li className="nav-list-item">
          <Link className="link" to="/">
            Events
          </Link>
        </li>
        <li className="nav-list-item">
          <Link className="link" to="/">
            Media
          </Link>
        </li>
        <li className="nav-list-item">
          <Link className="link" to="/">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { Link, NavLink } from "react-router-dom";
import logo from "../Images/logo.png";

function Header() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <img
            style={{
              width: "200px",
            }}
            src={logo}
            className="App-logo"
            alt="logo"
          />
        </Link>

        <NavLink to="/">
          <li>Home</li>
        </NavLink>

        <NavLink to="/about">
          <li>About</li>
        </NavLink>

        <NavLink to="/content">
          <li>Content</li>
        </NavLink>

        <NavLink to="/infocard">
          <li>InfoCard</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Header;

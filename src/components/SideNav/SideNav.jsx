import "./SideNav.css";
import { NavLink } from "react-router-dom";
function SideNav({ handleClose }) {
  return (
    <div className="sidenav-container bg-white position-relative w-auto px-4 py-5 ">
      <div className="sidenav-img">
        <img src="/profile.jpg" alt="profile" />
      </div>
      <h1>
        <a href="#">Jackson Ford</a>
      </h1>
      <p className="title">
        <a href="#">UI/UX/DESIGNER</a> IN PHILIPPINES
      </p>
      <ul className="sidenav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={handleClose}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={handleClose}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={handleClose}
          >
            SKILLS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={handleClose}
          >
            EXPERIENCE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/work"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={handleClose}
          >
            WORK
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;

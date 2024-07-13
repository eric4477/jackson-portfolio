import "./SideBar.css";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar-container p-0 col-md-2">
      <div className="sidebar px-4 py-5 d-none d-lg-block">
        <div className="profile-img">
          <img src="/profile.jpg" alt="profile" />
        </div>
        <a href="#" className="name">
          Jackson Ford
        </a>
        <p className="title">
          <a href="#">UI/UX/DESIGNER</a> IN PHILIPPINES
        </p>
        <ul className="sidebar-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              SKILLS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              EXPERIENCE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              WORK
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;

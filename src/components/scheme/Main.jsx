import { NavLink, Outlet } from "react-router-dom";
import "./Main.css";

function Main() {
  return (
    <>
      <nav className="sub-nav">
        <div className="nav-links">
          <li>
            <NavLink className="NavLink2" to="Store">
              Store
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLink2" to="Users">
              Users
            </NavLink>
          </li>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Main;

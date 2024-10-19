import { NavLink } from "react-router-dom";
import './Nav.css';
import { FaSearch } from 'react-icons/fa'; 

function Nav(){

    return (
    <nav className="nav-main" >
            <img src="/logo.svg" alt="" />
        <div className="links">
            <ul>
                <li><NavLink className="NavLink" to="/">Home</NavLink></li>
               <li><NavLink  className="NavLink" to="/Counter">Counter</NavLink></li>
               <li><NavLink  className="NavLink" to="/Main" >Main-users</NavLink></li>
            
            </ul>
        </div>
        <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
            <FaSearch className="search-icon" />
      </div>
    </nav>
    )
}



export default Nav
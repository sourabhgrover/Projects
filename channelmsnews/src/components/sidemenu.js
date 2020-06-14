import React from "react";
import { Link } from "react-router-dom"

export default function sidemenu(props) {
  return (
    <div>
      <aside className="menu div-menu-item">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <a href="/">Breaking News</a>
          </li>
          <li>
            <Link to="/category/covd19">COVD-19</Link>
          </li>
        </ul>
        <p className="menu-label">Categories</p>
        <ul className="menu-list">
          <li>
            {/* <Link to ="/category/Business">Business</Link> */}
            <Link to={{
              pathname: "/category/Business",
              state: { fromDashboard: true }
            }} >Business</Link>
          </li>
          <li>
            <Link to={{
              pathname: "/category/Sports",
              state: { fromDashboard: true }
            }}>Sports</Link>
          </li>
          <li>
            <Link to={{
              pathname: "/category/Technology",
              state: { fromDashboard: true }
            }}>Technology</Link>
          </li>
          <li>
            <Link to={{
              pathname: "/category/Science",
              state: { fromDashboard: true }
            }}>Science</Link>
          </li>
          <li>
            <Link to="/category/Health">Health</Link>
          </li>

          <li>
            <a href="Health" onClick={props.onMenuBarLinkClick}>
              Health
        </a>
          </li>
        </ul>
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <Link to="/Region">Region</Link>
          </li>
          <li>
            <Link to="/myaccount">My Account</Link>
          </li>
          <li>
            <a href="/">Sign Out</a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

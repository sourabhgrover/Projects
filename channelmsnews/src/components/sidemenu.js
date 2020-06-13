import React from "react";
import {Link} from "react-router-dom"

export default function sidemenu() {
  return (
    <div>
      <aside className="menu div-menu-item">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <a href="/">Breaking News</a>
          </li>
          <li>
          <Link to ="/category/covd19">COVD-19</Link>
          </li>
        </ul>
        <p className="menu-label">Categories</p>
        <ul className="menu-list">
          <li>
            <Link to ="/category/Business">Business</Link>
          </li>
          <li>
          <Link to ="/category/Sports">Sports</Link>
          </li>
          <li>
          <Link to ="/category/Technology">Technology</Link>
          </li>
          <li>
          <Link to ="/category/Science">Science</Link>
          </li>
          <li>
          <Link to ="/category/Health">Health</Link>
          </li>
        </ul>
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
          <Link to ="/Region">Region</Link>
          </li>
          <li>
          <Link to ="/myaccount">My Account</Link>
          </li>
          <li>
            <a href="/">Sign Out</a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

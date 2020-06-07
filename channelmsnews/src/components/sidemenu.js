import React from "react";

export default function sidemenu() {
  return (
    <div>
      <aside className="menu div-menu-item">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <a href="/">Top Stories</a>
          </li>
          <li>
            <a href="/">COVD-19</a>
          </li>
        </ul>
        <p className="menu-label">Categories</p>
        <ul className="menu-list">
          <li>
            <a href="/">Business</a>
          </li>
          <li>
            <a href="/">Sports</a>
          </li>
          <li>
            <a href="/">Technology</a>
          </li>
          <li>
            <a href="/">Science</a>
          </li>
          <li>
            <a href="/">Health</a>
          </li>
        </ul>
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <a href="/"> Region</a>
          </li>
          <li>
            <a href="/">My Account</a>
          </li>
          <li>
            <a href="/">Sign Out</a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

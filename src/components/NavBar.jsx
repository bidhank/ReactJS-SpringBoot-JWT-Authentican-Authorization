import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
const NavBar = ({ user }) => {
  const role = user ? user.roles[0] : "NoRole"; //Check if User is undefined to avoid error
  const activeStyle = {
    fontWeight: "bold",
    color: "white",
  };
  return (
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
        <li className="sidebar-brand">
          <NavLink to="/login">MyApp</NavLink>
        </li>
        {!user && (
          <React.Fragment>
            <hr></hr>

            <li>
              <NavLink to="/login">
                <i className="fa fa-sign-in" aria-hidden="true"></i> Login
              </NavLink>
            </li>
          </React.Fragment>
        )}

        {user && (
          <React.Fragment>
            <li>
              <NavLink to="/dashboard" activeStyle={activeStyle}>
                <i className="fa fa-home" aria-hidden="true"></i> Dashboard
              </NavLink>
            </li>

            {role === "ROLE_ADMIN" && (
              <li>
                <NavLink to="/addUser" activeStyle={activeStyle}>
                  <i className="fa fa-user-plus"></i> Add User
                </NavLink>
              </li>
            )}

            <hr></hr>
            <li>
              <NavLink to="/userProfile" activeStyle={activeStyle}><i className="fa fa-user" aria-hidden="true"></i> {user.sub}</NavLink>
            </li>

            <li>
              <NavLink to="/logout">
                <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
              </NavLink>
            </li>
          </React.Fragment>
        )}
      </ul>
    </div>
  );
};

export default NavBar;

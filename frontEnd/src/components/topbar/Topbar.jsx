import React from "react";
import { NavLink } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"> Reconnaissance</span>
        </div>
        <div className="topRight">
          <NavLink className="nav" to="/manage">
            Manage data
          </NavLink>
        </div>
        <div className="topRight">
          <NavLink className="nav" to="/contribute">
            Contribute here
          </NavLink>
        </div>
      </div>
    </div>
  );
}

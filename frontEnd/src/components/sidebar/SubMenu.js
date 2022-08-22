import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../../styles/content.css";

const SidebarLabel = styled.span``;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <NavLink
        className="navlink"
        style={({ isActive }) => ({
          background: isActive ? "#353535" : "",
          padding: isActive ? "10px 0 10px 10px" : "10px",
          color: isActive ? "white" : "",
          height: "60px",
          justifyContent: " space-between",

          listStyle: "none",
          textDecoration: "none",
          fontSize: "25px",
          display: "flex",
          alignItems: "center",
        })}
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <SidebarLabel>{item.title}</SidebarLabel>

        {item.subNav && subnav
          ? item.iconOpened
          : item.subNav
          ? item.iconClosed
          : null}
      </NavLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <NavLink
              className="itm"
              style={({ isActive }) => ({
                background: isActive ? "#353535" : "",
                fontSize: isActive ? "25px" : "18px",
                color: isActive ? "white" : "",
              })}
              to={item.path}
              key={index}
            >
              <SidebarLabel className="labl">{item.title}</SidebarLabel>
            </NavLink>
          );
        })}
    </>
  );
};

export default SubMenu;

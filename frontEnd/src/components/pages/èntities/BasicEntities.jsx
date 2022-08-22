import "../../../styles/content.css";
import React from "react";

import { NavLink } from "react-router-dom";
import { BasicEntityData } from "./BasicEntityData";

const BasicEntities = () => {
  return (
    <div className="content">
      <div className="Table">
        <h3> Entities</h3>
        {BasicEntityData.map((item, key) => {
          if (item.path !== "") {
            return (
              <React.Fragment key={key}>
                <p>
                  {item.content}{" "}
                  <NavLink to={item.path} className="entityNav">
                    click here.
                  </NavLink>
                </p>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment key={key}>
                <p>{item.content}</p>
              </React.Fragment>
            );
          }
        })}
      </div>
    </div>
  );
};

export default BasicEntities;

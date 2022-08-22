import React from "react";

import "../../../styles/content.css";
const Networkrel = ({ entities }) => {
  return (
    <div className="content">
      <div className="Table">
        <div>
          <h2>
            This Entity category includes Entities that are related to personal
            information found on the Internet
          </h2>

          {entities.map((entity, key) => {
            if (entity.category === "Network-related") {
              return (
                <React.Fragment key={entity.ID}>
                  <h4>{entity.title}</h4>
                  <p>{entity.sentense}</p>
                  <table>
                    <tbody>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Short description</th>
                        <th>Category</th>
                        <th style={{ borderRight: "none" }}>Sample</th>
                      </tr>
                      <tr>
                        <td>{entity.ID}</td>
                        <td>{entity.name}</td>
                        <td>{entity.description}</td>
                        <td>{entity.category}</td>
                        <td style={{ borderRight: "none" }}></td>
                      </tr>
                    </tbody>
                  </table>
                </React.Fragment>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Networkrel;

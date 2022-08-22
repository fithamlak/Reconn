import "../../../styles/content.css";
import { NavLink } from "react-router-dom";
import React from "react";

const Transform = ({ transforms }) => {
  return (
    <div className="content">
      <div className="Table">
        <div>
          <h3>
            These are all the transforms with detail information of each
            transform as presented below
          </h3>

          {(transforms || []).map((transform, key) => {
            return (
              <React.Fragment key={transform.ID}>
                <h4>{transform.title}</h4>
                <p>{transform.sentense}</p>

                <table>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>Transform ID</th>
                      <th>Input Entity</th>
                      <th>Output Entity</th>
                      <th>Revers Flag</th>
                      <th>Used Tool</th>
                      <th style={{ borderRight: "none" }}>Description</th>
                    </tr>
                    <tr>
                      <td>{transform.ID}</td>
                      <td>{transform.name}</td>
                      <td>{transform.inputEntity}</td>
                      <td>{transform.outputEntity}</td>
                      <td>{transform.reverseFlag}</td>
                      <td>
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "blue",
                            hover: { textDecoration: "underline !important" },
                          }}
                          to="/Tolls/KaliTools"
                        >
                          {transform.usedTool}
                        </NavLink>
                      </td>

                      <td style={{ borderRight: "none" }}>
                        {transform.description}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Transform;

import React, { useEffect, useState } from "react";

import "../styles/content.css";

import "./manage.css";
import axios from "axios";

function TemporaryData() {
  const [temporaries, setTemporaries] = useState([
    {
      titie: "",
      category: "",
      description: "",
    },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/tempos")
      .then((res) => setTemporaries(res.data))

      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="content">
      <div className="Table">
        <div>
          <p>
            please try to dig more about these entities and tools that are
            posted by some contriubuter of these website
          </p>

          {temporaries.map((temporary, key) => {
            return (
              <React.Fragment key={temporary.id}>
                <h4>{temporary.title}</h4>

                <table>
                  <tbody>
                    <tr>
                      <th>title</th>
                      <th>category</th>
                      <th>description</th>
                      <th style={{ borderRight: "none" }}>Sample</th>
                    </tr>
                    <tr>
                      <td>{temporary.title}</td>
                      <td>{temporary.category}</td>
                      <td>{temporary.description}</td>
                      <td style={{ borderRight: "none" }}></td>
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
}

export default TemporaryData;

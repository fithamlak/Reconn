import "../../../styles/content.css";
import { NavLink } from "react-router-dom";

import { HashLink } from "react-router-hash-link";

const KalTools = () => {
  return (
    <div className="content">
      <div className="Table">
        <div>
          <h2>These are list of all open source tools with their details</h2>
          <p>
            in the context of networking, refers to any group of users,
            workstations, devices, printers, computers and database servers that
            share different types of data via network resources. There are also
            many types of subdomains.
          </p>
          <table>
            <tbody>
              <tr>
                <th>Transform ID</th>
                <th>Tool Selected</th>
                <th>Procedure</th>
                <th>Example</th>
                <th>resource</th>
              </tr>
              <tr>
                <td>
                  <NavLink
                    style={{
                      textDecoration: "none",
                      color: "blue",
                      hover: { textDecoration: "underline !important" },
                    }}
                    to="/transform"
                  >
                    T-001
                  </NavLink>
                </td>
                <td>Nslookup</td>
                <td>
                  <b> On Kali Linux command </b>
                  <br /> - <code>nslookup domain name </code>
                </td>
                <td>
                  <img alt="" src={require("../../../images/t-001.PNG")} />
                </td>
                <td>
                  <a
                    style={{ textDecoration: "none", color: "blue" }}
                    href="https://www.ionos.com/digitalguide/server/tools/nslookup/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    More about Nslookup
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <p>
            in the context of networking, refers to any group of users,
            workstations, devices, printers, computers and database servers that
            share different types of data via network resources. There are also
            many types of subdomains.
          </p>
          <table>
            <tbody>
              <tr>
                <th>Transform ID</th>
                <th>Tool Selected</th>
                <th>Procedure</th>
                <th>Example</th>
                <th>resource</th>
              </tr>
              <tr>
                <td>
                  <HashLink
                    to="/transform/#second"
                    style={{
                      textDecoration: "none",
                      color: "blue",
                      hover: { textDecoration: "underline !important" },
                    }}
                  >
                    T-002
                  </HashLink>
                </td>
                <td>Sublist3r</td>
                <td>
                  <b>Install Sublist3r from github using the command</b> <br />
                  <b> - cd in to Sublist3r</b> <br />
                  <b>- then install requirements using the command </b> <br />
                  <cod>- pip install –r requirements.txt</cod>
                  <br />
                  <b>- on kali’s command line type</b>
                  <br />
                  <code>Sublistr -v –d domain name -o outputfolder</code>
                </td>
                <td>
                  <img alt="" src={require("../../../images/t-002v1.jpg")} />
                </td>
                <td>
                  <a
                    style={{ textDecoration: "none", color: "blue" }}
                    href="https://www.kali.org/tools/sublist3r/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    more abou sublist3r
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <p>
            in the context of networking, refers to any group of users,
            workstations, devices, printers, computers and database servers that
            share different types of data via network resources. There are also
            many types of subdomains.
          </p>
          <table>
            <tbody>
              <tr>
                <th>Transform ID</th>
                <th>Tool Selected</th>
                <th>Procedure</th>
                <th>Example</th>
                <th>resource</th>
              </tr>
              <tr>
                <td>
                  <HashLink
                    to="/transform/#second"
                    style={{
                      textDecoration: "none",
                      color: "blue",
                      hover: { textDecoration: "underline !important" },
                    }}
                  >
                    T-003
                  </HashLink>
                </td>
                <td>MailsHunt</td>
                <td>
                  <b>
                    - Visit--
                    <a
                      style={{ textDecoration: "none", color: "blue" }}
                      href="https://mailhunt.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      mailhunt.io
                    </a>
                  </b>{" "}
                  <br />
                  <b>
                    - - And then at email section insert the target email and
                    press check now{" "}
                  </b>{" "}
                  <br />
                </td>
                <td>
                  <img alt="" src={require("../../../images/t-003v1.jpg")} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KalTools;

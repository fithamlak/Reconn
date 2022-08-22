import "../../../styles/content.css";

const Grouped = () => {
  return (
    <div className="content">
      <div className="Table">
        <div>
          <h2>These are group related entities with thier descriptions....</h2>
          <h4>Company</h4>
          <p> A business organization</p>
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
                <td>Gr-01</td>
                <td>company</td>
                <td>A business organization</td>
                <td>Groups</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Organization</h4>
          <p>A social group which distributes tasks for a collective goal</p>
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
                <td>Gr-02</td>
                <td>organization</td>
                <td>
                  A social group which distributes tasks for a collective goal
                </td>
                <td>Groups</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Educational Institutions</h4>
          <p>
            An institution dedicated to education such as a school or university
          </p>
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
                <td>Gr-03</td>
                <td>Educational Institutions</td>
                <td>
                  An institution dedicated to education such as a school or
                  university
                </td>
                <td>Groups</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Religious Group</h4>
          <p>A group of people who share religious or spiritual beliefs</p>
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
                <td>Gr-04</td>
                <td>Religious Group</td>
                <td>
                  A group of people who share religious or spiritual beliefs
                </td>
                <td>Groups</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>online group</h4>
          <p>
            A socializing service on the Internet such as Facebook, an IRC
            channel or a mailing list
          </p>
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
                <td>Gr-05</td>
                <td>Online Group</td>
                <td>
                  A socializing service on the Internet such as Facebook, an IRC
                  channel or a mailing list
                </td>
                <td>Groups</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Poletical movement</h4>
          <p>A group of people working together to achieve a political goal</p>
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
                <td>Gr-06</td>
                <td>Poletical movement</td>
                <td>
                  A group of people working together to achieve a political goal
                </td>
                <td>Groups</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Gang</h4>
          <p>An organized group of criminals</p>
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
                <td>Gr-07</td>
                <td>Gang</td>
                <td>An organized group of criminals</td>
                <td>Groups</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Grouped;

import "../../../styles/content.css";

const Devices = () => {
  return (
    <div className="content">
      <div className="Table">
        <div>
          <h2>
            This Entity category includes Entities that are related to
            electronic devices.
          </h2>
          <h4>Mobile Phone</h4>
          <p>
            {" "}
            A device which can make and receive telephone calls over a radio
            link whilst moving around a wide geographic area
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
                <td>De-01</td>
                <td>Mobile Phone</td>
                <td>
                  A device which can make and receive telephone calls over a
                  radio link whilst moving around a wide geographic area
                </td>
                <td>Devices</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Computer</h4>
          <p> An electronic device for storing and processing data</p>
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
                <td>De-02</td>
                <td>Computer</td>
                <td>An electronic device for storing and processing data</td>
                <td>Devices</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Mobile Computer</h4>
          <p>A portable computer suitable for use while traveling</p>
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
                <td>De-03</td>
                <td>mobile computer</td>
                <td>A portable computer suitable for use while traveling</td>
                <td>Devices</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Desktop computer</h4>
          <p>
            A personal computer in a form intended for regular use at a single
            location
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
                <td>De-04</td>
                <td>desktop computer</td>
                <td>
                  A personal computer in a form intended for regular use at a
                  single location
                </td>
                <td>Devices</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Smartphone</h4>
          <p>
            A mobile phone that offers more advanced computing ability and
            connectivity
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
                <td>De-05</td>
                <td>smartphone</td>
                <td>
                  A mobile phone that offers more advanced computing ability and
                  connectivity
                </td>
                <td>Devices</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Camera</h4>
          <p>
            A device Entity represents an electronic device such as a
            smartphone, tablet or camera.
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
                <td>De-06</td>
                <td>Camera</td>
                <td>A device such as a phone or camera</td>
                <td>Devices</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Router</h4>
          <p>
            A router is a networking device that forwards data packets between
            computer networks. Routers perform the traffic directing functions
            on the Internet.
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
                <td>De-07</td>
                <td>Router</td>
                <td>
                  a device that connects two or more packet-switched networks or
                  sub networks
                </td>
                <td>Devices</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Devices;

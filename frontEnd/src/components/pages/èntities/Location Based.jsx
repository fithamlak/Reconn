import "../../../styles/content.css";

const Locational = () => {
  return (
    <div className="content">
      <div className="Table">
        <div>
          <h2>
            This Entity category includes Entities that are related to places on
            Earth.
          </h2>
          <h4>GPS Coordinate</h4>
          <p>
            A GPS co-ordinate is represented by two floats separated by a comma
            and points to a single point on Earth.{" "}
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
                <td>Lo-01</td>
                <td>GPS</td>
                <td>A location on a World Geodetic System</td>
                <td>Locations</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Circular Area</h4>
          <p>
            A Circular area Entity is represented by a GPS co-ordinate and a
            radius around the co-ordinate. The Entity value is written in the
            following comma separated format (long, lat, radius).
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
                <td>Lo-02</td>
                <td>Circular Area</td>
                <td>A circular area somewhere on Earth</td>
                <td>Locations</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4>Location</h4>
          <p>
            In our case the location Entity is officially made up of three
            fields - city, region and country. The reality is that different
            Transforms provide different levels of accuracy and detail of
            information.
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
                <td>Lo-03</td>
                <td>Location</td>
                <td>A location on Mother Earth</td>
                <td>Locations</td>
                <td style={{ borderRight: "none" }}></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Locational;

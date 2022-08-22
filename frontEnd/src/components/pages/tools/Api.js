import "../../../styles/content.css";

const Api = () => {
  return (
    <div className="content">
      <div className="Table">
        <div>
          <h2>These are device related entities with thier discriptions....</h2>
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
              </tr>
              <tr>
                <td>T-001</td>
                <td>Nslookup</td>
                <td>
                  On Kali Linux command - <code>nslookup domain name </code>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Api;

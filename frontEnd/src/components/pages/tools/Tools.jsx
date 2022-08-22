import "../../../styles/content.css";

import styled from "styled-components";

import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Tools = () => {
  return (
    <div className="content">
      <div className="Table">
        <div>
          <h4>Tools and their corresponding Transforms </h4>
          <p>
            Below in the table we tried to collect tools from every source which
            can be OSINT, API or web APP which are used in order to apply the
            transforms mentioned on the
            <NavLink
              to="/transform/#second"
              style={{
                textDecoration: "none",
                color: "blue",
                hover: { textDecoration: "underline !important" },
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              transform page.
            </NavLink>
            The tools are not the only ones there are plenty of other tools we
            use on this phase of cyber kill Chain and we advise the user to have
            a look at. But the tools mentioned below are some common tools from
            hundreds of other tools Available.
          </p>
          <p>
            There are many tools that are not included or that need to be
            modified from the stock tool set in any of The security
            distributions. But Tools listed here are some of them.
          </p>
          <Wrapper>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
                height: "450px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-001
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>wtools.io</li>
                      <li>AnalyzeID</li>
                      <li>Sitediff</li>
                      <li>Redirect Detective</li>
                      <li>SameID</li>
                      <li>Daily DNS Changes</li>
                      <li>urlscan.io</li>
                      <li>Kraken</li>
                      <li>IP Rover</li>
                      <li>DNSlookup</li>
                      <li>IP logger </li>
                      <li>IP2WHOIS</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-002
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>AltDNS </li>
                      <li>Sublist3r</li>
                      <li>Network Intelligence</li>
                      <li>assetnote</li>
                      <li>gdns</li>
                      <li>dnspop</li>
                      <li>SecLists </li>
                      <li>DNS Subdomains </li>
                      <li> Pentest-tools.com </li>
                      <li>Subdomains</li>
                      <li>theHarvester </li>
                      <li>Bluto </li>
                      <li>Fierce Domain Scanner </li>
                      <li>Gobuster </li>
                      <li>DNS Recon </li>
                      <li>XRay </li>
                      <li>Recon-ng </li>
                      <li>Google Subdomains </li>
                      <li>FindSubDomains </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </Wrapper>

          <Wrapper>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-003
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>Buster </li>
                      <li>MailsHunt</li>
                      <li>Skymem</li>
                      <li>MailDB</li>
                      <li>theHarvester </li>
                      <li>Reverse Genie Email</li>
                      <li>VoilaNorbert</li>
                      <li>Pipl</li>
                      <li>Email to Address </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
                height: "225px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-004
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>WHOIS lookup </li>
                      <li>Geekflare</li>
                      <li>MxToolBox</li>
                      <li>DNS Watch </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </Wrapper>

          <Wrapper>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-005
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>MxToolBox </li>
                      <li>Whoisxmlapi</li>
                      <li>InfoByIp</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-006
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>InfoByIp </li>
                      <li>Whois</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </Wrapper>

          <Wrapper>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-007
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>Mxlookup </li>
                      <li>Nslookup</li>
                      <li>Censy</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-008
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>Censy </li>
                      <li>dnsrecon</li>
                      <li>Nslookup</li>
                      <li>Mxlookup</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </Wrapper>

          <Wrapper>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-009
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>Dirhunt </li>
                      <li>UrlBuster</li>
                      <li>Crawl Box</li>
                      <li>Dirbuster</li>
                      <li>DIRB</li>
                      <li>Wfuzz</li>
                      <li>metasploit</li>
                      <li>Dirsearch </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-010
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>-Scrap using scrapping tools </li>
                      <li>
                        -Find email address on the front end of the webpage{" "}
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </Wrapper>

          <Wrapper>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-011
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>-InfoByIp </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-012
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>Robtex </li>
                      <li>Nmap</li>
                      <li>netblocktool</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </Wrapper>

          <Wrapper>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-013
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>-scarp emails from url using scripts </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-014
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>localize.mobi </li>
                      <li>Phonefogia </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </Wrapper>

          <Wrapper>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-015
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>Hanter Techlockup </li>
                      <li>Netcraf </li>
                      <li>SimilarTech </li>
                      <li>Rescan </li>
                      <li>Wappalyzer </li>
                      <li>Builtwith</li>
                      <li>webspotter </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-017
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>LinkedIn </li>
                      <li>Phonefogia </li>
                      <li>Any Who </li>
                      <li>True caller </li>
                      <li>CocoFinder </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </Wrapper>

          <Wrapper>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-018
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>My IP Address </li>
                      <li>ipTRACKERonline </li>
                      <li>InfobyIP.com </li>
                      <li>utrace</li>
                      <li>Info Sniper </li>
                      <li>IP Location Finder</li>
                      <li>DB-IPIP Fingerprints </li>
                      <li>IP2Location.com </li>
                      <li>IPv4/IPv6 lists by country code </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                marginRight: "20px",
                maxWidth: "450px",
                height: "225px",
              }}
            >
              <tbody>
                <tr>
                  <th>Transform Id</th>
                  <th style={{ borderRight: "none" }}>Tools</th>
                </tr>
                <tr>
                  <td>
                    <NavLink className="tool" to="/transform">
                      T-019
                    </NavLink>
                  </td>
                  <td style={{ textAlign: "left", borderRight: "none" }}>
                    <ul style={{ listStyle: "none" }}>
                      <li>Shodan </li>
                      <li>Nmap </li>
                      <li>ZoomEye </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </Wrapper>
        </div>
      </div>
    </div>
  );
};

export default Tools;

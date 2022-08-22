import "../../../styles/content.css";

import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="content">
      <div className="Table">
        <div>
          <h3> Reconnaissance Introduction </h3>
          <p>
            <b> Reconnaissance</b> is the primary step on cyber kill chain in
            which an Ethical Pentester collects and analyzes data and
            information related to the adversaries or the target organization
            they are carrying the attack on. The goal of the reconnaissance
            phase is to identify weak points of the target. Any information
            gathered about the target may be the crucial piece needed to reveal
            a critical weakness in defense or an unknown offensive capability of
            the adversaries.
          </p>
          <p>
            Reconnaissance phase in ethical hacking is a common technique used
            by security professionals to assess an organization’s security
            posture. It can be used as part of a more extensive assessment or in
            isolation and can provide valuable information about the
            organization’s cyber security vulnerabilities. For hackers,
            Reconnaissance can be used to gather information about a target that
            can then be incorporated when planning an attack. This includes
            information such as the names of employees, contact details, and
            social media profiles..
          </p>
          <p>
            Any weakness found may lead to infiltration of the target network.
            On this module we will go through each and every step of
            reconnaissance methodologies,
            <NavLink
              to="/BasicEntities"
              style={{
                textDecoration: "none",
                color: "blue",
                hover: { textDecoration: "underline !important" },
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              Entities
            </NavLink>{" "}
            ,
            <NavLink
              to="/tools"
              style={{
                textDecoration: "none",
                color: "blue",
                hover: { textDecoration: "underline !important" },
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              Tools
            </NavLink>
            and{" "}
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
              transform
            </NavLink>{" "}
            .any attacker should follow in order to successfully collect
            information regarding the target. On our short module we will see
            how to obtain information related to network: - in which we can see
            manipulation of entities related to network such as IP addresses,
            subnet mask, and network topology domain names... Etc. , Information
            related to Host such as user names, group names, architecture type
            (e.g. x86 vs. SPARC), operating system family, version of TCP and
            UDP services running with versions… Etc., Information related to
            Security Policies such as password complexity requirements ,
            password change frequency , expired/disabled account , retention
            physical security (e.g. locks, ID badges, etc.) , firewalls ,
            intrusion detection systems… Etc.
          </p>
          <p>
            The goal of this site is to give anyone who is starting on cyber
            security and some other fields related Basics and profound
            information about passive reconnaissance (attempt to gain
            information about targeted computers and networks without actively
            engaging with the systems) and active reconnaissance (the attacker
            engages with the target system, typically conducting a port scan to
            determine find any open ports.) And that information is the
            cornerstone of other cyber kill chain.
          </p>
        </div>

        <div>
          <h3> Types of Reconnaissance </h3>
          <h4>1.Passive Reconnaissance</h4>
          <p>
            It is Is when you gather information about a target without directly
            interacting with the target? This means that you don’t send any type
            of request to the target and therefore the target has no way of
            knowing that you are gathering information on them. Generally
            passive information gathering uses public resources that have
            information on that target. Using public resources to gather
            information is called Open source intelligence (OSINT). Using OSINT
            you can gather things such as IP addresses, domain names, email
            addresses, names, hostnames, dns records and even what software is
            running on a website and its associated CVE’s.
          </p>
          <h4>2. 2. Active Reconnaissance</h4>
          <p>
            Active recon is when you interact directly with a computer system in
            order to gather system specific information about the target. Unlike
            passive information gathering that relies on publicly available
            information, active information gathering relies on tools that will
            send different types of requests to the computer. The goal is to
            gather information about that device or other devices that are
            connected to it on the same network. Active recon can be used to
            find out information such as open/closed ports, the OS of a machine,
            the services that are running, banner grabbing, discovering new
            hosts or find vulnerable applications on a host..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

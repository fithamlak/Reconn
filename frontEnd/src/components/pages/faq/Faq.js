import "../../../styles/content.css";

const Faq = () => {
  return (
    <div className="content">
      <div className="Table">
        <div>
          <h3> Reconnaissance the first phase of ethical hacking</h3>
          <p>
            <b> Reconnaissance</b> , also known as the preparatory phase, is
            where the hacker gathers information about a target before launching
            an attack and is completed in phases prior to exploiting system
            vulnerabilities. One of the first phases of Reconnaissance is
            dumpster diving.
          </p>
          <p>
            It is during this phase that the hacker finds valuable information
            such as old passwords, names of important employees (such as the
            head of the network department), and performs an active
            reconnaissance to know how the organization functions. As a next
            step, the hacker completes a process called footprinting to collect
            data on the security posture, reduces the focus area such as finding
            out specific IP addresses, identifies vulnerabilities within the
            target system, and finally draws a network map to know exactly how
            the network infrastructure works to break into it easily.
            Footprinting provides important information such as the domain name,
            TCP and UDP services, system names, and passwords. There are also
            other ways to do footprinting, including impersonating a website by
            mirroring it, using search engines to find information about the
            organization, and even using the information of current employees
            for impersonation.
          </p>
          <p>
            here we try to present full information about reconnaissance, what
            are those entities we can collect during reconnaissance and
            footprintining, tools we used to gather about information of those
            entities and also procedures we follow during this information
            gathering.
          </p>
          <p>
            To present these iformation in a modularized form we try to present
            it in three main division. The first one is <b> Entities</b> which
            contains information about the five(5) types of entities like person
            related, network related, location related, device related and group
            related. The second main part is <b>Tools </b> part which in turn
            contains three catagories of tools we used to get information about
            entities by using other entities as input. The last but not the
            least main part is <b> Transform</b> which contains detail
            information of how we get entities from other entities by using
            tools.all thes informations are presented in the left sidebar of
            this page, visit each part to have detail information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;

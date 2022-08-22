import "./sidebar.css";

import styled from "styled-components";

import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

const SidebarNav = styled.nav``;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  return (
    <>
      <SidebarNav className="sidebar">
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return (
              <SubMenu
                
                item={item}
                key={index}
              />
            );
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};
export default Sidebar;

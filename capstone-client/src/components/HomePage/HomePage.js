import { useState, useContext } from "react";
// components
import SideNav from "./SideNav";
import TopNavbar from "./TopNavbar";
import PageContainer from "./PageContainer";
// import UiFooter from './UiFooter'

import Side from "./Side";
import DropdownMobile from "./DropdownMobile";
import Exit from "./Exit";
import UiHeaderMobile from "../Body/UiHeaderMobile";
// import DropdownMobile from "./DropdownMobile";

// IMPORT API'S
import { UserContext } from "../UserContext";
import { PageContext } from './PageContext';

export default function HomePage() {
  const { user } = useContext(UserContext);
  
  const [activePage, setActivePage] = useState('HOME');
 
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState(null);

  return (
    <PageContext.Provider value={{activePage, setActivePage}}>
      <div className="frontPage">
        {/* {toggleMobile && (
          <>
            <DropdownMobile />
            <div style={{position: "fixed", zIndex: 300, right: "30px", top: "30px"}}>
              <Exit handleExit={toggleMobileDropdown} />
            </div>
          </>
        )} */}
        
        {window.innerWidth > 800 && <SideNav activePage={activePage} />}

        <div className="content">
          <TopNavbar setPosts={setPosts} setUsers={setUsers} />

          <div className="content-body">
            <PageContainer post={post} setPost={setPost} />

            {/* {window.innerWidth > 800 && (
              <div className="side">
                <Side />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </PageContext.Provider>
  );
}

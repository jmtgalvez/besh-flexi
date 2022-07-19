import React, { useState, useContext } from "react";
import {UIHeader} from "../Body/UIHeader";
// components
import NewsFeedsForm from "./NewsFeedsForm";
import Chat from "../Chat/Chat";
import TopNavbar from "./TopNavbar";
import Trending from "./Trending";
import About from "./About";
import Settings from "./Settings";
import Help from "./Help";
import FeedBack from "./FeedBack";
// import UiFooter from './UiFooter'

import Hamburger from "./Hamburger";
import Side from "./Side";
import DropdownMobile from "./DropdownMobile";
import Exit from "./Exit";
import UiHeaderMobile from "../Body/UiHeaderMobile";
// import DropdownMobile from "./DropdownMobile";
import { UserContext } from "../UserContext";

import * as Api from '../api/post';
import UiContentCards from "./ContentCards";
import { Navigate } from "react-router";

export default function HomePage() {
  const [toggleMobile, setToggleMobile] = useState(false);
  const [posts, setPosts] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const toggleMobileDropdown = () => {
    setToggleMobile((prev) => !prev);
  };

  const togglePage = (page)=>{
      setActivePage(page);
  }
  console.log(activePage)

  const populatePosts = () => {
    Api.getAllPosts()
      .then( response => {
        return (
            <>
              {[...(response.data.posts)].map( post => <UiContentCards userName={post.username} userPostText={post.content} /> )}
            </>
        )
      })
  }

  return (
    <div className="frontPage">
      {toggleMobile && (
        <>
          <DropdownMobile />
          <div style={{position: "fixed", zIndex: 300, right: "30px", top: "30px"}}>
            <Exit handleExit={toggleMobileDropdown} />
          </div>
        </>
      )}
      {window.innerWidth > 800 && (
        <div className="header">
          <UIHeader togglePage={togglePage} activePage={activePage} />
        </div>
      )}
      <div className="content">
        <div className="navbar">
          {window.innerWidth < 800 && <Hamburger handleShow={toggleMobileDropdown} />}
          <TopNavbar togglePage={togglePage} activePage={activePage} />
        </div>

        <div className="content-body">
          <div className="newsfeeds">
            {window.innerWidth < 800 && <UiHeaderMobile />}
            {
            activePage == 1 ? <NewsFeedsForm /> :
            activePage == 2 ? <Trending /> : 
            activePage == 3 ? <Chat /> :
            activePage == 4 ? <About /> :
            activePage == 5 ? <Settings /> :
            activePage == 6 ? <Help />  : 
                              <FeedBack />
            }
            
            {populatePosts()}

          </div>

          {window.innerWidth > 800 && (
            <div className="side">
              <Side />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

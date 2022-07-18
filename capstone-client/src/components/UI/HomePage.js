import React, { useState, useContext } from "react";
import {UIHeader} from "../Body/UIHeader";
import UiNewsFeedsForm from "./UiNewsFeedsForm";
import UiNavbar from "./UiNavbar";
// import UiFooter from './UiFooter'
import Hamburger from "./Hamburger";
import UiSide from "./UiSide";
import DropdownMobile from "./DropdownMobile";
import Exit from "./Exit";
import UiHeaderMobile from "../Body/UiHeaderMobile";
// import DropdownMobile from "./DropdownMobile";

import * as Api from '../api/post';
import UiContentCards from "./UiContentCards";

export default function UiFrontPage() {
  const [toggleMobile, setToggleMobile] = useState(false);
  const [posts, setPosts] = useState([]);

  const toggleMobileDropdown = () => {
    setToggleMobile((prev) => !prev);
  };

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
          <UIHeader />
        </div>
      )}
      <div className="content">
        <div className="navbar">
          {window.innerWidth < 800 && <Hamburger handleShow={toggleMobileDropdown} />}
          <UiNavbar />
        </div>

        <div className="content-body">
          <div className="newsfeeds">
            {window.innerWidth < 800 && <UiHeaderMobile />}
            <UiNewsFeedsForm />
            {populatePosts()}
          </div>

          {window.innerWidth > 800 && (
            <div className="side">
              <UiSide />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

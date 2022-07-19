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
import SearchResult from "./SearchResult";
// import UiFooter from './UiFooter'

import Hamburger from "./Hamburger";
import Side from "./Side";
import DropdownMobile from "./DropdownMobile";
import Exit from "./Exit";
import UiHeaderMobile from "../Body/UiHeaderMobile";
// import DropdownMobile from "./DropdownMobile";
import { UserContext } from "../UserContext";


import UiContentCards from "./ContentCards";
import { Navigate } from "react-router";

// IMPORT API'S
import * as Api from '../api/post';
import * as ApiUser from '../api/users';

export default function HomePage() {
  const [toggleMobile, setToggleMobile] = useState(false);
  const [posts, setPosts] = useState([]);
  const [activePage, setActivePage] = useState(1);

  // for search input (retrieve users)
  const [searchResultUser, setSearchResultUser] = useState();
  const [search, setSearch] = useState();
  const [message, setMessage] = useState([]); 

  const handleSearchValue = (e) =>{
    setSearch(e.target.value);
  }

  const handleSearchUser = async ev =>{
    ev.preventDefault();

    const search_query = search;

    try{
     await ApiUser.searchUsers(search_query).then(result =>{
      let data = [];
        for (let i = 0; i< result.data.users.users.length; i++){
             data.push(
              {
                user_id: result.data.users.users[i].user_id,
                first_name: result.data.users.users[i].first_name,
                last_name: result.data.users.users[i].last_name,
                email: result.data.users.users[i].email,
                username: result.data.users.users[i].username 
              })
        }
        setSearchResultUser(data);
        setMessage({status: 'success', message: `${result.data.users.users.length} result/s found`});
      })
    }catch(err){
        setMessage({status: 'error', message: 'No record found'});
    }
  
  }

  // END SEARCH


  const toggleMobileDropdown = () => {
    setToggleMobile((prev) => !prev);
  };

  const togglePage = (page)=>{
      setActivePage(page);
  }

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
          <TopNavbar togglePage={togglePage} activePage={activePage}
          handleSearchUser={handleSearchUser} handleSearchValue={handleSearchValue} />
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
            activePage == 7 ? <FeedBack /> :
                              <SearchResult message={message} searchResultUser={searchResultUser} />
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

import React, { useState, useRef, useContext } from "react";
import DropdownModal from "./DropdownModal";
import { searchUsers } from '../api/users';
import { searchPosts } from '../api/post';

import { PageContext } from "./PageContext";
import { SearchContext } from "./SearchContext";

import Hamburger from './Hamburger';

export default function UiNavbar() {

  const { setActivePage } = useContext(PageContext);
  const { setSearchResult } = useContext(SearchContext);

  const [toggle, setToggle] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);

  const toggleDropdown = () => {
    setToggle(!toggle);
  };

  const toggleMobileDropdown = () => {
    setToggleMobile((prev) => !prev);
  };

  const searchRef = useRef();

  const handleSearch = async ev => {
    ev.preventDefault();
    const search_query = searchRef.current.value.trim();
    const usersResult = await searchUsers(search_query)
    const postsResult = await searchPosts(search_query)
    setSearchResult({
      users: usersResult.data.users,
      posts: postsResult.data.posts
    })
    setActivePage('SEARCH');
    searchRef.current.value = ''
  }

  return (
    <div className="navbar">
      {window.innerWidth < 800 && <Hamburger handleShow={toggleMobileDropdown} />}
      <div
        className="navbar-content px-5 rounded-2 d-flex align-items-center flex-1 justify-content-between">
        
        <form className="search d-flex align-items-center gap-1" onSubmit={handleSearch}>
          
          <input className="search-input py-2 px-4" type="search" placeholder="Search" ref={searchRef} />
          <button className="search-button btn-success" title='Search'>
            <SearchSvg />
          </button>
        </form>

        <NavDropdownButton toggleDropdown={toggleDropdown} toggle={toggle} />
        
        <div
          style={{display: toggle ? "flex" : "none"}}
          className="dropdownContainer p-2 card bg-light navlink">
          <DropdownModal toggleDropdown={toggleDropdown} />
        </div>

      </div>
    </div>
  );

}
// end search input component

function NavDropdownButton({toggleDropdown}) {
  return(
      <div onClick={toggleDropdown} className="profile-dropdown d-flex align-items-center navlink">
        <a className="dropdown-image p-1 rounded-circle" title="Profile">
          <ProfileSvg />
        </a>
      </div>
  )
}

const SearchSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  )
}

const ProfileSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      className="bi bi-person-circle"
      viewBox="0 0 16 16"
    >
      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path
        fillRule="evenodd"
        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
      />
    </svg>
  )
}
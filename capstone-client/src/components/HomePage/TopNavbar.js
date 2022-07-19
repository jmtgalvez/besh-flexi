import React, { useState, useRef } from "react";
import DropdownButtons from "./DropdownButtons";


export default function UiNavbar({togglePage, activePage,
handleSearchUser, handleSearchValue }) {

  const [toggle, setToggle] = useState(false);

  const toggleDropdown = () => {
    setToggle(!toggle);

  };

  return (

    // Search input
    <div
      className="navbar-content px-5 rounded-2 d-flex 
    
    align-items-center flex-1 justify-content-between">
      
      <form  className="search d-flex align-items-center gap-1" onSubmit={handleSearchUser}>
        
        <input onChange={handleSearchValue} className="search-input py-2 px-4" type="search" placeholder="First Name or Last Name or Email" />
        <button className="search-button btn-success" onClick={()=> togglePage(0)}>
          
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
        </button>
      </form>

      <NavDropdown toggleDropdown={toggleDropdown} toggle={toggle} />
      
      <div
        style={{display: toggle ? "flex" : "none"}}
        className="dropdownContainer p-2 card bg-light">
        <DropdownButtons togglePage={togglePage} activePage={activePage} toggleDropdown={toggleDropdown} />
      </div>

    </div>



  );

}
// end search input component

function NavDropdown({toggleDropdown}) {
  return(
      <div onClick={toggleDropdown} className="profile-dropdown d-flex align-items-center">
        <a className="dropdown-image p-1 rounded-circle">
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
        </a>
      </div>
  )
}


import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const searchRef = useRef();
  const [dropdown, setDropdown] = useState(false);

  const handleSearch = ev => {
    ev.preventDefault();
    console.log(searchRef.current.value);
  }

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }

  return (
    <header className='navbar p-5 w-100 align-items-center justify-content-between'>
      <div className='search d-flex align-items-center gap-1'>
        <form onSubmit={handleSearch}>
          <input className="search-input py-2 px-4" type="search" placeholder="Search" ref={searchRef}/>
          <button className="search-button btn-success">
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
      </div>
    </header>
  )
}

export default Header;
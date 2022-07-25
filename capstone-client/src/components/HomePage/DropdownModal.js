import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { logout } from '../api/auth';

import { UserContext } from "../UserContext";
import { PageContext } from "./PageContext";


export default function DropdownModal({toggleDropdown}) {
  const {user, setUser} = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('refresh_token');
    logout();
  }

  return (
    <>
    {/* Start Dropdown Header */}
      <div className="dropdown-header card-header text-center">
        <div className="photo-dropdown">
          <Link to='/'>
            <img className="img-thumbnail" src="https://picsum.photos/200/200" alt="" />
          </Link>
        </div>

        <h4>{`${user.last_name}, ${user.first_name} `}</h4>
      </div>
      {/* End Dropdown Header */}

      {/* Start Dropdown Body */}
      <div className="dropdown-body my-2">

        <DropdownLink pageTo={'Settings'} toggleDropdown={toggleDropdown} />
        <DropdownLink pageTo={'Followed List'} toggleDropdown={toggleDropdown} />
        <DropdownLink pageTo={'Give Feedback'} toggleDropdown={toggleDropdown} />

      
        <a onClick={handleLogout}>
          <LogoutSvg />
          <span>Log Out</span>
        </a>
      </div>
      {/* end Dropdown Body */}
    </>
  );
}

const DropdownLink = ({ pageTo, toggleDropdown }) => {
  const { setActivePage } = useContext(PageContext);

  const switchPage = () => {
    toggleDropdown();
    setActivePage(pageTo.toUpperCase());
  }

  return (
    <a onClick={switchPage} >
      {
        pageTo == 'Settings' ? <SettingsSvg /> :
        pageTo == 'Followed List' ? <FollowedListSvg /> :
        pageTo == 'Give Feedback' ? <FeedbackSvg /> :
        ''
      }
      <span>{pageTo}</span>
    </a>
  )
}

const SettingsSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className="bi bi-gear-fill"
      viewBox="0 0 16 16"
    >
      <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
    </svg>
  )
}

const FollowedListSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    width="30" 
    height="30" 
    fill="currentColor" 
    class="bi bi-person-hearts" 
    viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"/>
    </svg>
  )
}

const FeedbackSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className="bi bi-chat-right-text-fill"
      viewBox="0 0 16 16"
    >
      <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353V2zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zm0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1z" />
    </svg>
  )
}

const LogoutSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="currentColor"
      className="bi bi-door-closed-fill"
      viewBox="0 0 16 16"
    >
      <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  )
}
import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../images/logo_besh.png";

export default function Header() {
  return (
    <header className="header__navbar opensans">
      <div id="frontpage__logo">
        <Link to="/" className="opensans">
          <img src={Logo} alt="Besh logo" title="Besh - Your one and only social app!" />
        </Link>
      </div>
      <nav>
        {window.innerWidth > 460 ? (
          <ul>
            <li title='Log in'>
              <Link id="frontpage__header__btn" to="/Login" title='Log in'>
                Log In
              </Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

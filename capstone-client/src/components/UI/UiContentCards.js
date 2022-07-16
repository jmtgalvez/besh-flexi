/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function UiContentCards({userName, userPostText, userPostPhoto}) {
  return (
    <div>
      <div className="newsfeeds-content p-5 d-flex flex-column gap-4 card">
        <div className="card-header user-info d-flex">
          <a href="#" className="newsfeeds-content-photo bg-light p-1 rounded-circle">
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
          <h6 className="p-2">P{userName}</h6>
        </div>
        <div className="card-body">
          <p>
            {userPostText}
          </p>
          {userPostPhoto && <img src={userPostPhoto} alt="Posts" />}
        </div>
      </div>
    </div>
  );
}

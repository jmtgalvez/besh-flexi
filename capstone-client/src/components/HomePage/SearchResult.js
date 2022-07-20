import React, { useState } from 'react'

export default function SearchResult({message, searchResultUser}) {

const result = Object.keys(searchResultUser).map(key =>{
  return <Content key={searchResultUser[key].user_id} first_name={searchResultUser[key].first_name}
   last_name={searchResultUser[key].last_name} email={searchResultUser[key].email} username={searchResultUser[key].username} />
})
  return (
    <div className='searchContainer d-flex gap-2'>
      <div className="card w-100 h-100">
        <div className="card-header">
            <div className={message.status == 'error' ? 'alert alert-danger' : 'alert alert-success'}>{message.message}</div>
        </div>
      </div>
    {result}
    </div>
  )
}

function Content({key, username, first_name, last_name, email}){
  return(

  <div className="card w-100" key={key} >

      <div  className="searchResult d-flex gap-2 align-items-center justify-content-center row p-3">
          <div className="searchPhoto col-3 d-flex justify-content-center">
              <img src="https://picsum.photos/seed/picsum/200/300" alt="Profile" />
          </div>
          <div className="searhInfo col-7">
          <h5>{`${last_name}, ${first_name}`}</h5>
          <p>{username}</p>
          </div>
          <a className="follow col-2 btn btn-success sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
                <span className='ms-2'>Follow</span>
          </a>
      </div>
  </div>
      
      )
}

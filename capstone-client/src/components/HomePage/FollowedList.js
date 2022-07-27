import React, {useEffect, useState} from 'react'
import { getAllUsers } from '../api/users';

import UserCard from './UserCard';

export default function FollowedList() {
    const [users, setUsers] = useState([]);

    // const [isFollowed, setIsFollowed] = useState(users.isFollowed === 'true');

    // const handleFollow = () => {
    //     setIsFollowed(!isFollowed);
    //     isFollowed ? unfollowUser(users.user_id) : followUser(users.user_id);
    // }

useEffect(()=>{
    const listUsers = getAllUsers().then(response =>{
        setUsers(response.data.users)
    })
}, [])

const displayUsers = [...users].map( user => <UserCard key={user.user_id} user={user} /> )

// const displayUsers = [...users].map( user => 
// <UserCard key={user.user_id} user={user} /> )

  return (
    <div className='followed_list'>
        <div className='w-100 px-4'>
            <h3 className='text-start ms-5'>Following</h3>
        </div>
        
        {displayUsers}
        
    </div>
  )
}

const FollowedUsers = ({user}) =>{
    return(
        <div className="card w-100 my-2">
    
            <div  className="searchResult d-flex gap-2 align-items-center justify-content-center row p-3">
                <div className="searchPhoto col-3 d-flex justify-content-center">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="Profile" />
                </div>
                <div className="searhInfo col-7">
                <h5>{`${user.last_name}, ${user.first_name}`}</h5>
                <p>{user.username}</p>
                </div>
                <a className="follow col-2 btn btn-success sm" >
                {/* { isFollowed ? '' :  */}
                (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                </svg>)
                {/* } */}
                    <span className='ms-2'>Follow</span>
                </a>
            </div>
        </div>
    )
}

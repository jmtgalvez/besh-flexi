import React, { useState, useContext } from 'react';
import {v4 as uuidv4} from 'uuid';
import { UserContext } from '../UserContext';
import ContentCards from './ContentCards';
import { Navigate } from 'react-router';
import * as Api from '../api/post';

export default function NewsFeedsForm(){
  // Setting the value of what user will post.
  const [postText, setPostText] = useState('');
  // const [postPhoto, setPostPhoto] = useState('');
  const [postStorage, setPostStorage] = useState([]);

  const [isliked, setIsLiked] = useState(false);

  const { user } = useContext(UserContext);

  user == null ? 
    window.location.href = '/Login'
    : ''

  const likeThis = () => {
    setIsLiked(true);
  }
  const unlikeThis = () => {
    setIsLiked(false);
  }

  const handleSubmit = async ev => {
    ev.preventDefault();
    // console.log(user);

    const postData = {
      user_id: user.user_id,
      content: postText,
      date: new Date(Date.now()),
    }

    await Api.addPost(postData)
      .then( response => {
        handleUserPostSubmit(ev)
      })
  }

  // Function for submission of user post.
  const handleUserPostSubmit = (e) => {
    e.preventDefault();
    
    const d = new Date();
    let currentDate = d.toLocaleDateString([], {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })

    let userPost = {
      userId: uuidv4(),
      userPostText: postText,
      date_posted: currentDate,
    }

    setPostStorage([...postStorage, userPost])
    console.log(postStorage)

    setPostText('');
  }

  return (
    <div className="newsfeeds-container d-flex flex-column gap-3">
          <form className='newsfeeds-container-1 p-5 d-flex flex-column gap-4' onSubmit={handleSubmit}>
            <div className="post-container d-flex">
                <a href="#" className='newsfeeds-photo bg-light p-1 rounded-circle'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
                </a>

                <input 
                  className='newsfeeds-input p-2' 
                  type="text"
                  name="content"
                  id="content"
                  placeholder="Share something?"
                  onChange={(e) => {setPostText(e.target.value)}}
                  value={postText}
                  required
                />
            </div>
            <div className='post-button d-flex justify-content-end gap-3'>
                <button className='btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-file-image" viewBox="0 0 16 16">
                      <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"/>
                    </svg>
                </button>
                <button 
                type='submit' 
                className='btn btn-success'
                // onClick={handleUserPostSubmit}
                >
                  <b>Post</b>
                </button>
            </div>
        </form>

        {postStorage && postStorage.map(item => {
          return(<div key={item.userId}>
          <ContentCards userName={item.userId} userPostText={item.userPostText} like={likeThis} unlike={unlikeThis} isLiked={isliked}/>
          </div>)
        })}
    </div>
    
  )
}

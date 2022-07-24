import { useState, useEffect } from 'react';
import PostCard from './PostCard';

import { getAllPosts, addPost } from '../api/post';

export default function NewsFeed({ setPost }) {
  const [posts, setPosts] = useState([]);

  const loadPosts = () => {
    getAllPosts()
    .then( response => {
      setPosts([...(response.data.posts)]);
    })
  }

  useEffect(() => {
    loadPosts();
  }, []);


  return (
    <>
      <NewsFeedForm loadPosts={loadPosts} />
      {posts && posts.map( post => <PostCard key={post.post_id} post={post} setPost={setPost} /> )}
    </>
  )
}

function NewsFeedForm({ loadPosts }){
  // Setting the value of what user will post.
  const [postText, setPostText] = useState('');
  // const [postPhoto, setPostPhoto] = useState('');

  const handleSubmit = async ev => {
    ev.preventDefault();

    const postData = {
      content: postText,
      date: new Date(Date.now()),
    }

    await addPost(postData)
    setPostText('');
    loadPosts();
  }

  return (
    <div className="newsfeeds-container d-flex flex-column gap-3">
          <form className='newsfeeds-container-1 p-5 d-flex flex-column gap-4' onSubmit={handleSubmit}>
            <div className="post-container d-flex">
                <a href="#" className='newsfeeds-photo bg-light p-1 rounded-circle' title='Profile'>
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
                  title='Write your post.'
                  required
                />
            </div>
            <div className='post-button d-flex justify-content-end gap-3'>
                <button className='btn' title='Upload a photo.'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-file-image" viewBox="0 0 16 16">
                      <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"/>
                    </svg>
                </button>
                <button type='submit' className='btn btn-success'title='Post'>
                  <b>Post</b>
                </button>
            </div>
        </form>
    </div>
    
  )
}
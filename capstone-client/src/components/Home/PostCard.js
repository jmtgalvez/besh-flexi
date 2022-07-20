import React from 'react';

function PostCard({ post }) {

  const formatTimeSince = date => {
    let timeSince = Date.now() - new Date(date);
    if ( timeSince < 1000 ) return `~${timeSince}ms`;
    timeSince /= 1000;
    if ( timeSince < 60 ) return `~${Math.floor(timeSince)}s`;
    timeSince /= 60;
    if ( timeSince < 60 ) return `~${Math.floor(timeSince)}m`;
    timeSince /= 60;
    if ( timeSince < 24 ) return `~${Math.floor(timeSince)}hr`;
    timeSince /= 24;
    if ( timeSince < 30 ) return `~${Math.floor(timeSince)}d`;
    return date;
  }

  return (
    <div className='row p-2'>
      <div className='p-2 rounded-circle col-2'>
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
      </div>
      
      <div className='col-10 p-2'>
        <h4>{`${post.first_name} ${post.last_name}`}<span className='text-muted'> @{post.username} {formatTimeSince(post.dateupdated)}</span></h4>
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default PostCard
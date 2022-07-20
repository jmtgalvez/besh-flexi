import React from 'react'

export default function Comment({username, comment}) {
  return (
    <div className='card'>
        <div className="card-body">
            <h5>Comment</h5>
            <h6>{username}</h6>
            <div>{comment}</div>
        </div>
    </div>
  )
}

import React from 'react'

export default function Chat () {
  return (
    <div>
        <div className="card chat-container">
            <div className="card-header d-flex justify-content-center p-2">
                <h2 className='p-2'>Chat System</h2>
            </div>
            <div className="card-body row">
                <div className="col-sm-4 d-flex justify-content-center p-2">
                        <div className="card p-2 w-100">
                            Friend List
                        </div>
                </div>
                <div className="col-sm-8 d-flex justify-content-center p-2">
                        <div className="card p-2 w-100">
                            Chatbox
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

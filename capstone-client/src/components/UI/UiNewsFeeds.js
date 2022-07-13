import React from 'react';

export default function UiNewsFeeds(){
  return (
    <div className="newsfeeds-container d-flex flex-column gap-3">
          <form className='newsfeeds-container-1 p-5 d-flex flex-column gap-4'>
            <div className="post-container d-flex">
                <a href="" className='newsfeeds-photo bg-light p-1 rounded-circle'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>
                </a>
                <input className='newsfeeds-input p-2' type="text" placeholder="Share something?" />
            </div>
            <div className='post-button d-flex justify-content-end gap-3'>
                <button className='btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-file-image" viewBox="0 0 16 16">
                      <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"/>
                    </svg>
                </button>
                <button type='submit' className='btn btn-success'><b>Post</b></button>
            </div>
        </form>

        <div className="newsfeeds-content p-5 d-flex flex-column gap-4 card">
          <div className="card-header user-info d-flex">
              <a href="" className='newsfeeds-content-photo bg-light p-1 rounded-circle'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
              </a>
              <h6 className='p-2'>Adonis Jr. Suico</h6>
          </div>
          <div className="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deleniti modi magnam temporibus, cupiditate, quam voluptas debitis fugit aliquam fuga corporis quasi aperiam nemo nulla asperiores rem sed nesciunt. Laboriosam!</p>
              <img src="https://picsum.photos/id/237/200/300" alt="Posts" />
          </div>
        </div>

        <div className="newsfeeds-content p-5 d-flex flex-column gap-4 card">
          <div className="card-header user-info d-flex">
              <a href="" className='newsfeeds-content-photo bg-light p-1 rounded-circle'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
              </a>
              <h6 className='p-2'>Adonis Jr. Suico</h6>
          </div>
          <div className="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, deleniti modi magnam temporibus, cupiditate, quam voluptas debitis fugit aliquam fuga corporis quasi aperiam nemo nulla asperiores rem sed nesciunt. Laboriosam!</p>
              <img src="https://picsum.photos/id/237/200/300" alt="Posts" />
          </div>
        </div>
    </div>
    
  )
}

import React, { useState, useRef } from 'react'

export default function Settings ()  {

  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const first_name_ref = useRef();
  const last_name_ref = useRef();
  const username_ref = useRef();
0
  function handleSubmitSec2(e){
    e.preventDefault();
    
    console.log(first_name_ref.current.value)

    if(first_name_ref.current.value !== ''){
      console.log('empty')
    }
    const user ={
      user_id:'',
      first_name: first_name_ref.current.value,
      last_name: last_name_ref.current.value,
      username: username_ref.current.value
    }

  }

  const togglePassword = () => {
    setIsEdit(!isEdit)
  }
  
  const showPassword = () =>{
    setIsChecked(!isChecked)
  }

  return (
    <div className='settings_container container p-3'>
        
        <div className="settings_container_section1 card p-2">
          <section className="settings__profile__picture mb-2 d-flex justify-content-center ">
            <img className='img img-thumbnail' src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" width={200} height={200} alt="This is a photo" />
            <div className='d-flex align-items-end'>
                <input type="file" />
            </div>
          </section>
        </div>
      <div className="settings_container_section2 card mt-2">
        
        <form action="" method="put" className='form'>

          <div className="settings_first_name p-3 mx-2">
              <label htmlFor="first_name">First Name</label>

              <input type="text" 
              name="first_name" 
              id="first_name" 
              className='form-control'
              ref={first_name_ref} />

          </div>

          <div className="settings_last_name p-3 mx-2">
              <label htmlFor="username">Last Name</label>

              <input type="text" 
              name="username" 
              id="username" 
              className='form-control' 
              ref={last_name_ref} />
          </div>

          <div className="settings_last_name p-3 mx-2">
              <label htmlFor="last_name">User Name</label>
              <input 
              type="text"
              name="last_name" 
              id="last_name" 
              className='form-control'
              username={username_ref} />
          </div>

          <button 
          type="button" 
          className='general__btns float-end m-3'
          onSubmit={handleSubmitSec2}
          >Save</button> 
        
        </form>

      </div>
      <SettingsPassword togglePassword={togglePassword} isEdit={isEdit} 
      showPassword={showPassword} isChecked={isChecked} />

  </div>

  )
}

function SettingsPassword({togglePassword, isEdit, isChecked, 
  showPassword}){
  return(
    <div className="settings_container_section3 card p-2 mt-2 d-flex align-items-center">
          <h3 style={{display: isEdit ? "block": "none"}}>Change Password</h3>
          {/* TOGGLE */}


          <div className="passwordToggle d-flex w-100 justify-content-between p-2" onClick={!isEdit ? togglePassword : ()=>{}}  >
              <label className='password_label' htmlFor=""  style={{display: !isEdit ? "block": "none"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                </svg>
               <span className='ms-2'>Password</span> </label>
              <a className='edit_password' htmlFor=""  style={{display: !isEdit ? "block": "none"}}>Edit</a>
          </div>


            {/* CURRENT PASSWORD */}


          <div className="settings_current_password p-3 mx-2 col-sm-10"  style={{display: isEdit ? "block": "none"}} >
              <label htmlFor="current_password">Current Password</label>
              <input type={isChecked ? 'password': 'text'} name="current_password" id="current_password" className='form-control'/>
          </div>


          {/* NEW AND CONFIRM PASSWORD */}
          <div className="settings_password mx-2 p-3 d-sm-flex col-sm-10" >
              <div className='col-sm-6' style={{display: isEdit ? "block": "none"}}>
                <label htmlFor="password">Password</label>
                <input type={isChecked ? 'password': 'text'} name="password" id="password" className='form-control' />
              </div>

              <div className='col-sm-6' style={{display: isEdit ? "block": "none"}}>
                <label htmlFor="confirm_password">Confirm Password</label>
                <input type={isChecked ? 'password': 'text'} name="password" id="password" className='form-control' />
              </div>
          </div>
          <div className="d-flex align-items-start w-75"> 
            <label style={{display: isEdit ? "block": "none"}} htmlFor="showPassword" className='show_password mb-5'>
              <input onChange={showPassword} id='showPassword' type="checkbox" name='showPassword' /> Show Password
            </label>
          </div>
          
          
          <div className='d-flex gap-3'>
            <button type='button' style={{display: isEdit ? "flex": "none"}} className='general__btns float-end'>Submit</button>
            <button type='button' style={{display: isEdit ? "flex": "none"}} onClick={togglePassword} className='general__btns float-end'>Close</button>
          </div>
          
      </div>
  )
}

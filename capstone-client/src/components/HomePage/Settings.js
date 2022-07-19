import React, { useState } from 'react'

export default function Settings ()  {

  const [edit, activateEdit] = useState(false);

  const editNow = () => {
    activateEdit(prev => !prev);
  }

  return (
    <div className='settings__container container p-5'>
        <div className="settings__container__section1 card p-2 d-grid">
          <section className="settings__profile__picture mb-2">
            <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" width={200} height={200} alt="This is a photo" />
          </section>
          <section className="settings__profile__name">
            <h3>Juan Dela</h3>
          </section>
        </div>

        <div 
        className="container m-3 text-primary" onClick={editNow} 
        style={{cursor: 'pointer'}}>
          Edit
        </div>


      {edit ? 
      <div className="settings__container__section2 card mt-2">
        <form action="" method="" className='form'>
          <div className="settings__edit__name__input card p-5 m-2">
            <div className="first__name">
              <label htmlFor="edit__first__name">First Name:</label>
              <input type="text" name="edit__first__name" id="edit__first__name" className='form-control' />
            </div>
          </div>
          <div className="settings__edit__password__input card p-5 m-2">
            <div className="first__name">
              <label htmlFor="edit__first__name">Password:</label>
              <input type="password" name="edit__password__input" id="edit__password__input" className='form-control' />
            </div>
          </div>
          <button type="submit" className='general__btns float-end m-3'>Save</button> 
        </form>
      </div>
            :
      <div className="settings__container__section2 card mt-2">
        <form action="" method="" className='form'>
          <div className="settings__edit__name__input card p-5 m-2">
            <div className="first__name">
              <label htmlFor="edit__first__name">First Name:</label>
              <input type="text" name="edit__first__name" id="edit__first__name" className='form-control' readOnly />
            </div>
          </div>
          <div className="settings__edit__password__input card p-5 m-2">
            <div className="first__name">
              <label htmlFor="edit__first__name">Password:</label>
              <input type="password" name="edit__password__input" id="edit__password__input" className='form-control' readOnly/>
            </div>
          </div>
        </form>
      </div>
     }
  </div>

  )
}

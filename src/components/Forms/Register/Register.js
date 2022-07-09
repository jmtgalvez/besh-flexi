import React from 'react'

export default function Register() {
  return (
    <div className='register__section'>
      <section className='register__section__container__form'>
        <form action="" method='post' className='register__form'>
            <h1>Create account</h1>
   
          <div>
            <input type="text" name='first_name' id='first_name' className='register__form__input' placeholder=' ' autoComplete='off'/>
            <label htmlFor="first_name" className='register__form__label'>First Name</label>
          </div>
          <div>
            <input type="text" name='last_name' id='last_name' className='register__form__input' placeholder=' ' autoComplete='off'/>
            <label htmlFor="last_name" className='register__form__label'>Last Name</label>
          </div>
          <div>
            <input type="email" name='email' id='email' className='register__form__input' placeholder=' ' autoComplete='off'/>
            <label htmlFor="email" className='register__form__label'>Email</label>
          </div>
          <div>
            <input type="password" name='password' id='password' className='register__form__input' placeholder=' '/>
            <label htmlFor="password" className='register__form__label'>Password</label>
          </div>
          <div>
            <input type="password" name='rep-pass' id='rep_pass' className='register__form__input' placeholder=' '/>
            <label htmlFor="rep_pass" className='register__form__label'>Repeat Password</label>
          </div>

          <input type="submit" value="Register" className='general__btns'/>
        </form>
      </section>
    </div>
  )
}

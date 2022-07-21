import React, { useRef, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Unsplash1 from '../../../images/unsplash1.webp';
import { register } from '../../api/auth';
import { UserContext } from '../../UserContext';

export default function Register() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cPasswordRef = useRef();

  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async ev => {
    ev.preventDefault();

    if ( passwordRef.current.value !== cPasswordRef.current.value ) {
      return
    }
    
    const user = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }
    
    register(user)
      .then( response => {
        if (response.status === 200) {
          setUser(response.data.user);
          localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh_token));
        }
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
    { user
      ? (
        <Navigate to='/home' replace={true} />
      ) : (
        <div className='register__section'>
          <section className='register__section__container__form'>
            <form action="" method='post' className='register__form' onSubmit={handleSubmit}>
                <h1>Create account</h1>
      
              <div>
                <input 
                  className='register__form__input' 
                  type="text" 
                  name='first_name' 
                  id='first_name' 
                  placeholder=' ' 
                  autoComplete='off' 
                  ref={firstNameRef}
                />
                <label htmlFor="first_name" className='register__form__label'>First Name</label>
              </div>
              <div>
                <input 
                  type="text" 
                  name='last_name' 
                  id='last_name' 
                  className='register__form__input' 
                  placeholder=' ' 
                  autoComplete='off' 
                  ref={lastNameRef}
                />
                <label htmlFor="last_name" className='register__form__label'>Last Name</label>
              </div>
              <div>
                <input 
                  type="email" 
                  name='email' 
                  id='email' 
                  className='register__form__input' 
                  placeholder=' ' 
                  autoComplete='off' 
                  ref={emailRef}
                />
                <label htmlFor="email" className='register__form__label'>Email</label>
              </div>
              <div>
                <input 
                  type="password" 
                  name='password'
                  id='password'
                  className='register__form__input' 
                  placeholder=' ' 
                  ref={passwordRef}
                />
                <label htmlFor="password" className='register__form__label'>Password</label>
              </div>
              <div>
                <input 
                  type="password" 
                  name='rep-pass' 
                  id='rep_pass' 
                  className='register__form__input' 
                  placeholder=' ' 
                  ref={cPasswordRef}
                />
                <label htmlFor="rep_pass" className='register__form__label'>Repeat Password</label>
              </div>

              <input type="submit" value="Register" className='general__btns register__btn' />
            </form>
          </section>
          <section className="register__section__container__image">
            <img src={Unsplash1} alt="Abstract" />
          </section>
        </div>
      )
    }
    </>
  )
}

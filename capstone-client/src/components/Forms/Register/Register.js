import React, { useRef, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Unsplash1 from '../../../images/unsplash1.webp';
import { register } from '../../api/auth';
import { UserContext } from '../../UserContext';

export default function Register() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cPasswordRef = useRef();
  const [errMessage, setErrMessage] = useState();

  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async ev => {
    ev.preventDefault();

    if ( passwordRef.current.value !== cPasswordRef.current.value ) {
      setErrMessage("Password did not match")
      return
    }
    
    const user = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      username: usernameRef.current.value,
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
        <Navigate to='/' replace={true} />
      ) : (
        <div className='register__section'>
          <section className='register__section__container__form'>
            <form action="" method='post' className='register__form' onSubmit={handleSubmit}>
                <h1>Create account</h1>

              <h6 style={{display: errMessage ? 'block': 'none'}} className='alert alert-danger form-control'>{errMessage ? errMessage : ''}</h6>
              <div>
                <input 
                  className='register__form__input' 
                  type="text" 
                  name='first_name' 
                  id='first_name' 
                  placeholder=' ' 
                  autoComplete='off' 
                  required
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
                  required
                  ref={lastNameRef}
                />
                <label htmlFor="username" className='register__form__label'>Last Name</label>
              </div>
              <div>
                <input 
                  type="text" 
                  name='username' 
                  id='username' 
                  className='register__form__input' 
                  placeholder=' ' 
                  autoComplete='off' 
                  required
                  ref={usernameRef}
                />
                <label htmlFor="username" className='register__form__label'>Username</label>
              </div>
              <div>
                <input 
                  type="email" 
                  name='email' 
                  id='email' 
                  className='register__form__input' 
                  placeholder=' ' 
                  autoComplete='off' 
                  required
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
                  required
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
                  required
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

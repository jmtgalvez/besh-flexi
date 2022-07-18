import React, { useRef, useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import * as Api from '../../api/auth';

import { UserContext } from '../../UserContext';


function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [currentLogin, setCurrentLogin] = useState();

  const {user, setUser} = useContext(UserContext);
  

  function handleCurrentLogin(data){
    setCurrentLogin(data);
  }
  
  async function handleSubmit(ev) {
    ev.preventDefault();

    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    await Api.login(credentials)
      .then( response => {
        if ( response.status === 200 ) {
          setUser(response.data.user);
        }
      })
  }
    
  return (
    <>
      { user 
        ? (
          <Navigate to='/Home' replace={true} />
        ) : (
        <div className='login__section'>
          <div>{JSON.stringify(user)}</div>
          <section className="login__form__container">
              <form action="" method='' className='login__form' onSubmit={handleSubmit}>
                  <h1>Log In</h1>
                  <div className='login__form__div'>
                      <input 
                          type="text" 
                          name='email' 
                          id='email' 
                          className='login__input'
                          placeholder=' '
                          ref={emailRef}
                      />
                      <label htmlFor="email" className='login__input__label'>Email</label>
                  </div>
                  <div className='login__form__div'>
                      <input 
                          type="password" 
                          name='password' 
                          id='password' 
                          className='login__input'
                          placeholder=' ' 
                          ref={passwordRef}
                      />
                      <label htmlFor="password" className='login__input__label'>Password</label>
                  </div>
                  <button type="submit" className='general__btns'>Log in</button>
              </form>
          </section>
        </div>
        )
      }
    </>
  )
}

export default Login;
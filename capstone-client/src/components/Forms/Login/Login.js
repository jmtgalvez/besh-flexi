import React, { useRef, useState } from 'react';
import * as Api from '../../api/auth';
import UiFrontPage from '../../UI/UiFrontPage';


export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [currentLogin, setCurrentLogin] = useState();
  

    function handleCurrentLogin(data){
      setCurrentLogin(data);
    }
    console.log(currentLogin)
    
    async function handleSubmit(ev) {
      ev.preventDefault();

      const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value
      }

      const response =  (await Api.login(user));
      if (response.status === 200){
        // set datas;
        const data = response.data.user;
        handleCurrentLogin(data)
      }
   }

  return (
    <>
      {currentLogin ? 
      
      <UiFrontPage currentLogin={currentLogin} handleCurrentLogin={handleCurrentLogin}
      
      /> : 
        <div className='login__section'>
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
      </div>}
    </>
  )
}

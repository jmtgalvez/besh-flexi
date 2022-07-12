import React, { useRef } from 'react';
import * as Api from '../../api/auth';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
  
    async function handleSubmit(ev) {
      ev.preventDefault();
      
      const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value
      }
      
      console.log( (await Api.login(user)).data.data );
    }

  return (
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

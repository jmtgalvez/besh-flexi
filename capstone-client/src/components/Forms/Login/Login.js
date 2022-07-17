import React, { useRef, useState } from 'react';
import * as Api from '../../api/auth';


export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [datas, setDatas] = useState([]);
  
    async function handleSubmit(ev) {
      ev.preventDefault();
      
      const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value
      }
      
<<<<<<< HEAD
      const response =  (await Api.login(user));
      if (response.status === 200){
        window.location.href ='/userinterface';
      }
=======
      const apiData = (await Api.login(user)).data;
      setDatas(apiData);
      return datas;
>>>>>>> b97f25d3629a6f01ea1b976f2d0e45e5a7d8b20c
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

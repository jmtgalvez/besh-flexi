import { useRef, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { login } from '../../api/auth';

import { UserContext } from '../../UserContext';


function Login() {
  const emailRef = useRef();

  const passwordRef = useRef()

  const {user, setUser} = useContext(UserContext);
  
  async function handleSubmit(ev) {
    ev.preventDefault();

    const credentials = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    await login(credentials)
      .then( response => {
        if ( response.status === 200 ) {
          setUser(response.data.user);
          localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh_token));
        } else {
          alert('Invalid credentials.');
          return;
        }
      })
  }
    
  return (
    <>
      { user 
        ? (
          <Navigate to='/' replace={true} />
        ) : (
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
    </>
  )
}

export default Login;
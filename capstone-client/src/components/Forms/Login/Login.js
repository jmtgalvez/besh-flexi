import React from 'react'

export default function Login() {
  return (
    <div className='login__section'>
        <section className="login__form__container">
            <form action="" method='' className='login__form'>
                <h1>Log In</h1>
                <div className='login__form__div'>
                    <input type="email" name='login__email' id='login__email' className='login__input'/>
                    <label htmlFor="login__email" className='login__input__label'>Email</label>
                </div>
                <div className='login__form__div'>
                    <input type="email" name='login__password' id='login__password' className='login__input'/>
                    <label htmlFor="login__password" className='login__input__label'>Password</label>
                </div>
                <button type="submit" className='general__btns'>Log in</button>
            </form>
        </section>
    </div>
  )
}

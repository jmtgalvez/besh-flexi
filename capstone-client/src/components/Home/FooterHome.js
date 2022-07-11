import React from 'react';
import {Link} from 'react-router-dom';

export default function FooterHome() {
  return (
    <footer className='footer__nav__home'>
        <section className='footer__nav__home__logo'>
            <h3>
                <Link to='#'>Logo</Link>
            </h3>
        </section>
        <section className='footer__nav__home__text'>
            <p>All Rights Reserved 2022.</p>
        </section>
    </footer>
  )
}

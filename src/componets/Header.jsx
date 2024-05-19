import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
               <header className='logo'>
                <Link to='/' className='logo logo text-2xl font-bold text-white leading-tight font-serif '>Bedium</Link>
                <nav>
                  <Link to='/login' class="inline-block px-4 py-2 rounded-md text-white font-bold bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700 shadow-md shadow-cyan-500/50">Login</Link>
                  <Link to='/register' class="inline-block px-4 py-2 rounded-md text-white font-bold bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700  shadow-md shadow-cyan-500/50">Register</Link>
                </nav>
          </header>
        </>
    );
};

export default Header;
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(userInfo => {
        console.log(userInfo);
        setUserInfo(userInfo);
      });
  }, []);

  async function logout() {
    await fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    })
      .then(res => {
        if (res.ok) {
          setUserInfo(null);
          // Uncomment the preferred redirect option:
          // window.location.reload();
          // window.location.href = '/';
        } else {
          console.error('Error logging out:', res.statusText);
        }
      })
      .catch(error => {
        console.error('Error during logout:', error);
      });
  }

  const username = userInfo?.username;
    return (
        <>
               <header className='logo'>
                <Link to='/' className='logo logo text-2xl font-bold text-white leading-tight font-serif '>Bedium</Link>
                <nav>
                  {username && (
                    <>
                   <Link to="/create" className=" whitespace-nowrap px-2 py-2 rounded-md text-white font-bold bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700 shadow-md shadow-cyan-500/50 text-sm flex md:px-4">+ Create new post</Link>
                    <button  class="inline-block px-2 py-2 rounded-md text-white font-bold bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700 shadow-md shadow-cyan-500/50 md:px-4"
                    onClick={logout}>Logout</button>

                    </>
                  )}
                  {!username && (
                    <>
                     <Link to='/login' class="inline-block px-4 py-2 rounded-md text-white font-bold bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700 shadow-md shadow-cyan-500/50">Login</Link>
                  <Link to='/register' class="inline-block px-4 py-2 rounded-md text-white font-bold bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700  shadow-md shadow-cyan-500/50">Register</Link>
                    </>
                  )}
                 
                </nav>
          </header>
        </>
    );
};

export default Header;
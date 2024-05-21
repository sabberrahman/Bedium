import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const login = async (e) => {
 ;
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include' 
      });
  
      if (!response.ok) {
        // Handle non-2xx status codes
        const errorData = await response.json(); // Parse error message (if available)
        throw new Error(errorData?.message || 'Login failed'); 
      }
  
      const data = await response.json(); // Parse successful login response
      console.log('Login successful:', data); 
  
      toast.success('Login successful!');
      setUserInfo(data);
       setRedirect(true);
      //  window.location.reload() 
      
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message || 'Login failed.'); // Display user-friendly error message
    }
  };

   if (redirect) {
     navigate('/', { replace: true }); // Navigate and replace history entry
    window.location.reload();
    
   }
    return (
        <>
        <div className=' '>
            
        <form class="login" onSubmit={login}>
  <div class="mt-36 flex flex-col gap-6">
    <h1 class="text-4xl mb-6 text-center md:text-4xl md:mb-8">
      Login and keep <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl  font-semibold">blogging</span>
    </h1>

    <label for="email">Email</label>
    <input id="email" name="email" rows="6" placeholder="sabberdev@gmail.com" class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none resize-none text-black font-mono"
   value={username}
   onChange={e=> setUsername(e.target.value)}
    />

    <label for="password">Password</label>
    <input type="text" id="password" name="password" placeholder="password🔐" class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none text-black font-mono"
    value={password}
    onChange={e=> setPassword(e.target.value)}/>

    <button type="submit" class="bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Login
    </button>
  </div>
</form>

        </div>
          
        </>
    );
};

export default Login;
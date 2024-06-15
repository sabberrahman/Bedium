import React, { useState } from 'react';
import toast from 'react-hot-toast'



const Register = () => {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
   const register =async(e)=>{
    e.preventDefault();
    const res =await fetch('https://bediumapi.onrender.com/register',{
      method: 'POST',
      body:JSON.stringify({username,password,name}),
      headers: {'Content-Type': 'application/json'},
    })
    console.log(res);
    if (res.ok) {
      toast.success('Successfully created!');
    } else {
      toast.error('This is an error!');
    }
   }
    return (
        <>
       <form class="login" onSubmit={register}>
  <div class="mt-12 flex flex-col gap-6">
    <h1 class="text-4xl mb-6 text-center md:text-4xl md:mb-8">
      Register to start <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl  font-semibold">blogging</span>
    </h1>

    <label for="name">Username</label>
    <input id="text" name="name" rows="6" placeholder="sabber" class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none resize-none text-black font-mono"
    type='text'
    value={name}
    onChange={e=> setName(e.target.value)} required/>

    <label for="email">Email</label>
    <input id="email" name="email" rows="6" placeholder="sabberdev@gmail.com" class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none resize-none text-black font-mono"
    type='email'
    value={username}
    onChange={e=> setUsername(e.target.value)} required/>

    <label for="password">Password</label>
    <input type="text" id="password" name="password" placeholder="password🔐" class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none text-black font-mono"
      value={password}
      onChange={e=> setPassword(e.target.value)}
      required/>

    <button type="submit" class="bg-indigo-500 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Register
    </button>
  </div>
</form>



            
        </>
    );
};

export default Register;
import React from 'react';

const Login = () => {
    return (
        <>
        <div className=' '>
            
        <form class="login">
  <div class="mt-36 flex flex-col gap-6">
    <h1 class="text-4xl mb-6 text-center md:text-4xl md:mb-8">
      Login and keep <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-5xl  font-semibold">blogging</span>
    </h1>

    <label for="email">Email</label>
    <input id="email" name="email" rows="6" placeholder="sabberdev@gmail.com" class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none resize-none text-black font-mono"/>

    <label for="password">Password</label>
    <input type="text" id="password" name="password" placeholder="password🔐" class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-indigo-500 focus:outline-none text-black font-mono"/>

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
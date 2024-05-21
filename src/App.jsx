import { useState } from 'react'
import './App.css'
import Post from './componets/Post'
import Header from './componets/Header'
import { Route, Routes } from 'react-router-dom'
import Layout from './componets/Layout'
import Home from './componets/Home'
import Login from './componets/Login'
import Register from './componets/Register'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from './context/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-white opacity-80'>

      <UserContextProvider>

         <Routes>
       <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        </Route>

        </Routes>
      </UserContextProvider>
     <Toaster/>
    </div>
  )
}

export default App

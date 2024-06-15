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
import CreatePost from './componets/CreatePost'
import PostPage from './componets/PostPage'
import EditPost from './componets/EditPost'

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
        <Route path='/create' element={<CreatePost/>}/>
        <Route path='/post/:id' element={<PostPage/>}/>
        <Route path='/edit/:id' element={<EditPost/>}/>
        </Route>

        </Routes>
      </UserContextProvider>
     <Toaster/>
    </div>
  )
}

export default App

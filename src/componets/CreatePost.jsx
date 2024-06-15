import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate } from 'react-router-dom';
const CreatePost = () => {
    const[title,setTitle]=useState('')
    const[summary,setSummary]=useState('')
    const[content,setContent]=useState('')
    const[files,setfiles]=useState('')
    const [redir,setRedir]=useState(false)
  const navigate= useNavigate()

   async function createNewPost(e){
  
      e.preventDefault();
      const data= new FormData()
      data.set('title',title)
      data.set('summary',summary)
      data.set('content',content)
      data.set('file',files[0])
     const res=  await fetch('https://bediumapi.onrender.com/post',{
        method:'POST',
        body:data,
        credentials:'include',
      })
     console.log(res);
    if (res.ok) {
     setRedir(true)
    } else {
      // Handle errors appropriately (e.g., display error message to user)
      console.error('Error creating post:', await res.text());
    }
  }
  if (redir) { 
    toast.success('Your post is live now!');
    navigate('/')
  }
  
    return (
        <>
            <form onSubmit={createNewPost}>
                <input type="title"  placeholder='Title' className='bg bg-transparent p-2'
                value={title}
                onChange={e=> setTitle(e.target.value)} required/>
                <input type="title"  placeholder='summary' className='bg bg-transparent p-2'
                value={summary}
                onChange={e=> setSummary(e.target.value)} required/>
              
                <input type="file" className='bg bg-transparent p-2'
              
                onChange={e=>setfiles(e.target.files)} required/>
               <ReactQuill 
               value={content}
               onChange={newValue=> setContent(newValue)} required/>
               <button className="btn text-lg text-white font-bold bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700 shadow-md shadow-cyan-500/50 w-56 mt-2 font-sans"
               >Create Post</button>
            </form>
        </>
    );
};

export default CreatePost;
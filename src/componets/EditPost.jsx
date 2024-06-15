
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useNavigate, useParams } from 'react-router-dom';

// const modules = {
//         toolbar: [
//           [{ header: [1, 2, false] }],
//           ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//           [
//             { list: 'ordered' },
//             { list: 'bullet' },
//             { indent: '-1' },
//             { indent: '+1' },
//           ],
//           ['link', 'image'],
//           ['clean'],
//         ],
//       };

const EditPost = () => {
    const[title,setTitle]=useState('')
    const[summary,setSummary]=useState('')
    const[content,setContent]=useState('')
    const[files,setfiles]=useState('')
    const [redir,setRedir]=useState(false)
    const navigate= useNavigate()

    const {id}=useParams()

    const [fetchedData, setFetchedData] = useState(false);

    useEffect(() => {
        fetch('https://bediumapi.onrender.com/post/'+id)
          .then(response => {
            response.json().then(postInfo => {
              setTitle(postInfo.title);
              setContent(postInfo.content);
              setSummary(postInfo.summary);
              setFetchedData(true)
            });
          });
      }, []);
   
    async function updatePost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if (files?.[0]) {
          data.set('file', files?.[0]);
        }
        const response = await fetch('https://bediumapi.onrender.com/post', {
          method: 'PUT',
          body: data,
          credentials: 'include', //send cookie
        });
        if (response.ok) {
          setRedir(true);
        }
      
      }

    if (redir) { 
        toast.success('Edited successfully!');
        navigate('/post/'+id)
      }
    return (
        <>

        {fetchedData ? (
            <form onSubmit={updatePost}>
                <input type="title"  placeholder='Title' className='bg bg-transparent p-2'
                value={title}
                onChange={e=> setTitle(e.target.value)} />
                <input type="title"  placeholder='summary' className='bg bg-transparent p-2'
                value={summary}
                onChange={e=> setSummary(e.target.value)} />
              
                <input type="file" className='bg bg-transparent p-2'
              
                onChange={e=>setfiles(e.target.files)} />
               <ReactQuill 
               value={content}
               onChange={newValue=> setContent(newValue)} 
           
               />
               <button className="btn text-lg text-white font-bold bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700 shadow-md shadow-cyan-500/50 w-56 mt-2 font-sans"
               >Update Post</button>
            </form>
        ): (<div>
            Loadingg postt dataa.......
        </div>)}
            
        </>
    );
};

export default EditPost;
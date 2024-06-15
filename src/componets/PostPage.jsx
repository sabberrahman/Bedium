import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PostPage = () => {
    const {id}=useParams()
    const{userInfo}=useContext(UserContext)
    const[postInfo,setPostInfo]=useState(null)
    console.log(postInfo);
    useEffect(()=>{
        fetch(`http://localhost:4000/post/${id}`).then(res=>res.json()).then(postInfo=>setPostInfo(postInfo))
    },[])

    if (!postInfo) return '';
    return (
        <>
       <div className='post-page'>
  <div className='post-header'>
  <img src={`http://localhost:4000/${postInfo.cover}`} alt={postInfo.title} className="w-56  h-64 object-cover rounded-lg mx-auto  md:h-72 md:w-80" />
    <div className="flex justify-between items-center pt-4 px-4">
      <time className="text-gray-500 text-sm">{format(new Date(postInfo.createdAt), 'MMM d,yyyy HH:mm')}</time>
      <div className=" text-sm md:text-xl">
        by <span className="font-bold text-blue-400 ">@{postInfo.author.name ? postInfo.author.name : 'unknown author'}</span>
      </div>
      {userInfo.id === postInfo.author._id && (
        <div className='edit-row'>
          <Link to={`/edit/${postInfo._id}`} className='edit-btn flex items-center px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 md:px-4 md:py-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-gray-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            <span className="ml-2 text-sm font-medium">Edit this post</span>
          </Link>
        </div>
      )}
    </div>
  </div>
  <h1 className="text-2xl font-bold px-4 py-2">{postInfo.title}</h1>
  <div className=" text-sm md:text-xl px-2 pb-8" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
</div>

          
        </>
    );
};

export default PostPage;
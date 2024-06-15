import React, { useEffect, useState } from 'react';
import Post from './Post';

const Home = () => {
    const[posts,setPosts]=useState([])
    useEffect(() => {
    fetch('https://bediumapi.onrender.com/post')
        .then(res => res.json())
        .then(posts => setPosts(posts))
        .catch(error => console.error('Error fetching posts:', error));
}, []);
    return (
        <>
          {posts.length > 0 && posts.map((post) => (
        <Post key={post.id} {...post} /> 
      ))}
        </>
    );
};

export default Home;
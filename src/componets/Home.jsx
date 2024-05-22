import React, { useEffect, useState } from 'react';
import Post from './Post';

const Home = () => {
    const[posts,setPosts]=useState([])
    useEffect(() => {
    fetch('http://localhost:4000/post')
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
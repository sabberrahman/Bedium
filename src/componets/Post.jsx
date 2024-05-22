import React from 'react';
import {format} from 'date-fns'


const Post = ({title,summary,content,cover,createdAt,author}) => {
    
    return (
        <>
            <div className="post md:mb-8 ">
            <div className="image ">
               <img src="https://th.bing.com/th/id/OIP._UDTh35DyiRdG8hVr1yUrAHaD4?w=307&h=180&c=7&r=0&o=5&pid=1.7" alt="img for blog" className='  md:scale-100 ' />
            </div>
            <div className="text m-2 mb-1">
                <p className="info">
                <a  className="author text-sky-400">{author && author.username ? `@${author.name}` : 'Author Unknown'}</a>
                <time className="t text-slate-500">{format(new Date(createdAt),'MMM d,yyyy HH:mm')} </time>
               </p>
               <h2 className='font-bold '>{title}</h2>
               
            <p className='summary hidden md:block opacity-60'>{summary}</p>
            </div>
            <hr />
          </div> 
        </>
    );
};

export default Post;
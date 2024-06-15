import React from 'react';
import {format} from 'date-fns'
import {Link} from 'react-router-dom'


const Post = ({title,summary,content,cover,createdAt,author,_id}) => {
   
    return (
        <>
            <div className="post md:mb-8 ">
            <div className="image">
            <Link to={`/post/${_id}`}>
             <img src={'http://localhost:4000/'+cover} alt="img for blog" className='  md:scale-100  object-cover h-60' />   
            </Link>
               
            </div>
            <div className="text m-2 mb-1">
                <p className="info">
                <a  className="author text-sky-400">{author && author.username ? `@${author.name}` : 'Author Unknown'}</a>
                <time className="t text-slate-500">{format(new Date(createdAt),'MMM d,yyyy HH:mm')} </time>
               </p>
               <Link to={`/post/${_id}`}>
                <h2 className='font-bold '>{title}</h2>
               </Link>
               
               
            <p className='summary hidden md:block opacity-60'>{summary}</p>
            </div>
            <hr />
          </div> 
        </>
    );
};

export default Post;
import React from 'react';

const Post = () => {
    return (
        <>
            <div className="post md:mb-8 ">
            <div className="image ">
               <img src="https://th.bing.com/th/id/OIP._UDTh35DyiRdG8hVr1yUrAHaD4?w=307&h=180&c=7&r=0&o=5&pid=1.7" alt="img for blog" className='  md:scale-100 ' />
            </div>
            <div className="text m-2 mb-1">
                <p className="info">
                <a  className="author text-sky-400">@Sabberdev</a>
                <time className="t text-slate-500">18-05-24 8pm</time>
               </p>
               <h2 className='font-bold '>Lorem ipsum dolor ssicing elit. Qui molestiae, eveniet doloremque nisi blanditiis non quis imped itaque?</h2>
               
            <p className='summary hidden md:block opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsa velit, nemo voluptatem at illum tempora quae porro. Modi libero dolores harum, nihil excepturi nulla minima cum quia ut quos!</p>
            </div>
            <hr />
          </div> 
        </>
    );
};

export default Post;
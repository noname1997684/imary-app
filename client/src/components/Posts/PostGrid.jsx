import React from 'react'
import Post from './Post'
import {useSelector} from 'react-redux'

const PostGrid = () => {
  const {posts,isLoading}= useSelector((state)=>state.posts)
  if(!posts.length && !isLoading) return 'No Posts'
  return (
    isLoading ? <div className='loader'></div>:
    <div className='columns-5 gap-4 w-full space-y-3'>
        {
          posts.map((post)=>(
            
              <Post post={post} key={post._id}/>
            
          ))
        }
    </div>
  )
}

export default PostGrid
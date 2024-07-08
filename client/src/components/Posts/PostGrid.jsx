import React from 'react'
import Post from './Post'
import {useSelector} from 'react-redux'

const PostGrid = () => {
  const {posts,isLoading}= useSelector((state)=>state.posts)
  if(!posts.length && !isLoading) return 'No Posts'
  return (
    isLoading ? <div className='loader'></div>:
    <div className='xl:columns-5 lg:columns-4 sm:columns-3 columns-2 gap-4 w-full space-y-3'>
        {
          posts.map((post)=>(
            
              <Post post={post} key={post._id}/>
            
          ))
        }
    </div>
  )
}

export default PostGrid
import { useState } from "react";
import {FaRegThumbsUp,FaThumbsUp} from "react-icons/fa"
import {useDispatch} from "react-redux"
import {likePost} from "../../actions/posts"
const Likes = ({post}) => {
    const dispatch = useDispatch();
    const user=JSON.parse(localStorage.getItem('profile'))
    const [likes,setLikes]=useState(post?.likes)
    
    const userId= user?.result?.sub || user?.result?._id
    const hasLiked = post.likes.find((like)=>like === userId) 
    const handleClick=async()=>{
            dispatch(likePost(post._id))
            if(hasLiked){
                setLikes(post.likes.filter((id)=>id!==userId))
            }
            
            else{
                setLikes([...post.likes,userId])
            
            }
        
    }

    if(likes.length>0){
        return likes.find((like)=>like === userId) ? (
            <button onClick={handleClick} className='flex gap-2'>
            <FaThumbsUp/>
            <h1>
                {likes.length> 2 ? `You and ${likes.length -1} others` : `${likes.length} like${likes.length>1?'s':''}`}
            </h1>
            </button>
        ):(
            <button onClick={handleClick} className='flex gap-2'>
                <FaRegThumbsUp/>
                <h1>
                    {likes.length}{likes.length===1?'Like':'Likes'}
                </h1>
            </button>
        )
    }
  return (
    <button onClick={handleClick}>
    <FaRegThumbsUp/>
    </button>
  )
}

export default Likes
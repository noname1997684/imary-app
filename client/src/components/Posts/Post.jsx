import Likes from "../Likes/Likes"
import {MdMoreHoriz} from "react-icons/md"
import moment from "moment"
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
const Post = ({post}) => {
    const  navigate=useNavigate()
    const dispatch = useDispatch();
    const user=JSON.parse(localStorage.getItem('profile'))
    const openPost=()=>{
      navigate(`/posts/${post._id}`)
    }
    return (
      <div className='relative group overflow-hidden rounded-xl break-inside-avoid'>
        {(user?.result?.sub===post?.creator||user?.result?._id===post?.creator)&&(
          <div className='absolute right-2 text-white text-4xl hidden group-hover:flex duration-500 z-10'>
          <button onClick={()=>{navigate(`/update/${post._id}`)}}>
          <MdMoreHoriz />
          </button>
        </div>
        )}
        
        <img src={post.selectedFile} alt={post.title} className='object-fill w-full h-full'  onClick={openPost}/>
        <div className='absolute group-hover:bottom-0 flex flex-col  bg-white text-black w-full px-3 py-3'>
          <div onClick={openPost}>
          <h3 className='text-xl font-bold'>{post.name}</h3>
          <h5 className='text-xs'>{moment(post.createdAt).fromNow()}</h5>
          <h6>{post.tags.map((tag)=>`#${tag} `)}</h6>
          <h6 className='text-xl font-bold my-3'>{post.title}</h6>
          
          <p className='mb-3'>{post.message}</p>
          </div>
          {user &&(
            <div className='flex justify-between mx-2 text-3xl z-10'>
          
            <Likes post={post}/>
          
          </div>
          )}
          
        </div>
      </div>
    )
  }
  
  export default Post
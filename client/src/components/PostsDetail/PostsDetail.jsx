import {React,useEffect,useLayoutEffect,useRef,useState} from 'react'
import moment from 'moment'
import {getPost,commentPost} from '../../actions/posts'
import { useParams,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { IoSend } from "react-icons/io5";
import Post from '../Posts/Post'
import { getPostsBySearch } from '../../actions/posts';

const PostsDetail = () => {
  const {post,posts,isLoading}=useSelector((state)=>state.posts)
  const {id}= useParams()
  const navigate= useNavigate()
  const dispatch=useDispatch()
  const textbox=useRef(null)
  const [comments,setComments]=useState(post?.comments)
  const [comment,setComment]=useState('')
  const user=JSON.parse(localStorage.getItem('profile'))
  const commentsRef=useRef()
  useEffect(()=>{
    dispatch(getPost(id))
  },[id])

  useEffect(()=>{
    if(post){
      dispatch(getPostsBySearch({search:'none',tags:post.tags.join(',')}))
    }
  },[post])

  const autoHeight=()=>{
    if(textbox.current) {
    textbox.current.style.height='1px'
    textbox.current.style.height=`${textbox.current.scrollHeight}px`}
  }
  useLayoutEffect(autoHeight,[])
  if(!post) return null
  if(isLoading) return <div className='loader'></div>

  
  const handleChange=()=>{
    autoHeight()
    setComment(textbox.current.value)
  }
  const handleClick=async()=>{
    const finalComment=`${user.result.name}:${comment}`
    console.log(finalComment)
    const newComments= await dispatch(commentPost(finalComment,post._id))
    setComments(newComments)
    setComment('')
    commentsRef.current.scrollIntoView({behavior:'smooth'})
  }
  const recommendedPosts=posts.filter(({_id})=>_id!==post._id).slice(0,10)
  return (
    <section className='flex flex-col justify-center items-center gap-14'>
      <div className='flex max-w-[60vw] max-h-[95vh] rounded-3xl bsd-1'>
      <div>
        <img src={post.selectedFile} alt={post.title} className='object-cover w-full h-full max-w-[30vw] rounded-tl-3xl rounded-bl-3xl'/>
      </div>
      <div className='flex flex-col w-[30vw] p-3 m-2 gap-8'>
        <div className='flex flex-col gap-2'>
        <h2 className="text-3xl font-bold">{post.title }</h2>
        <p >{post.tags.map((tag)=>`#${tag} `)}</p>
        <p>{post.message}</p>
        <h1>{post.name}</h1>
        <h1 className='font-bold mt-3'>
            nhận xét
          </h1>
          <div>
            {comments?.map((c,i)=>(
              <h1 key={i}>
                <strong>{c.split(':')[0]}:</strong>
                {c.split(':')[1]}
              </h1>
            ))}
            <div ref={commentsRef}/>
          </div>
        </div>
        {user &&(
          <div className='flex flex-col p-6'>
          <h1>
            Thêm nhận xét
          </h1>
          <div className='w-full flex gap-2 justify-center items-center px-2 py-2 border-2 rounded-full '>
          <textarea value={comment} rows="1"  ref={textbox} onChange={handleChange} className='w-full px-2 rounded-full outline-none border-none resize-none'></textarea>
          <IoSend className='text-red-600 text-3xl' onClick={handleClick}/>
          </div>
        </div>
        )}
        
      </div>
      </div>
      <h1 className='font-bold text-xl text-center'>Các ý tưởng khác</h1>
      <div className='w-full p-4 bg-g'>
      
        {recommendedPosts.length?( <div className='columns-5 gap-4 w-full space-y-3'>
        {
          recommendedPosts.map((post)=>(
            
              <Post post={post} key={post._id}/>
            
          ))
        }
    </div>):(<h1 className='float-start'>Không có ý tưởng nào khác</h1>)}
       
      </div>
    </section>
  )
}

export default PostsDetail
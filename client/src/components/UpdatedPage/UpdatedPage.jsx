import {React,useEffect,useState} from 'react'
import { TextField,Button,Typography,Paper } from '@mui/material'

import {useDispatch,useSelector} from 'react-redux'
import { useNavigate,useParams } from 'react-router-dom'
import { updatedPost } from '../../actions/posts' 

const UpadatedPage = () => {
    const dispatch=useDispatch()
    const navigate= useNavigate()
    const {id}=useParams()
    const post=useSelector((state)=>id?state.posts.posts.find((p)=>p._id===id):null)
    
    const initialState={
        title:'',
        message:'',
        tags:'',
    }
    const user=JSON.parse(localStorage.getItem('profile'))
    const [postData,setPostData]=useState(post)
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(updatedPost(id,{...postData,name:user?.result?.name},navigate))
        
    }
    const handleChange=(e)=>{
        setPostData({...postData,[e.target.name]:e.target.value})
    }
    const clear=()=>{
        setPostData(initialState)
    }
    
  return (
    <section className='bg-a w-screen h-[88vh] max-[850px]:h-fit up-section flex items-center justify-center px-11'>
        <div className='flex w-[80vw] shadow-1 rounded-xl max-[850px]:flex-col'>
<div className='bg-white w-1/2 h-[80vh] p-8 max-[850px]:w-full rounded-tl-xl rounded-bl-xl top-sec'>
 <form 
        action=""
        autoComplete='off'
        noValidate
        onSubmit={handleSubmit}
         className='flex flex-col gap-4 w-full h-full justify-center items-center'
        >
            <h1  className='text-center font-bold text-4xl mb-12'>Sửa Bài</h1>
            <TextField name="title" variant="outlined" label="Tiêu đề" fullWidth
            value={postData.title}
            onChange={handleChange}
             color='secondary'
            className='bg-violet-100'
            />
            <TextField name="message" variant="outlined" label="Nội dung" fullWidth
            value={postData.message}
            onChange={handleChange}
             color='secondary'
            className='bg-violet-100'
            />
            <TextField name="tags" variant="outlined" label="Nhãn dán" fullWidth
            value={postData.tags}
             color='secondary'
            className='bg-violet-100'
            onChange={(e)=>setPostData({...postData,tags:e.target.value.split(',')})}
            />
            <div className='flex gap-4'>
            <button  type='submit' className='btn-grad light-btn'>Submit</button>
            <button type="button" className='btn-grad dark-btn' onClick={clear}>Clear</button>
        </div>
        </form>
</div>
   <div className='bg-white w-1/2 h-[80vh] flex items-center justify-center py-4 rounded-tr-xl rounded-br-xl max-[850px]:w-full bottom-sec'>
    <img src={post.selectedFile} className='max-h-full rounded-md'/>
   </div>
    
       
   </div>
    </section>
  )
}

export default UpadatedPage
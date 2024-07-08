import {React,useState} from 'react'
import { TextField,Button,Typography,Paper } from '@mui/material'
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../../actions/posts' 
import create from '../../images/create.PNG'
const CreatePage = () => {
    const dispatch=useDispatch()
    const navigate= useNavigate()
    const initialState={
        title:'',
        message:'',
        tags:'',
        selectedFile:''
    }
    const user=JSON.parse(localStorage.getItem('profile'))
    const [postData,setPostData]=useState(initialState)
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(createPost({...postData,name:user?.result?.name},navigate))
    }
    const handleChange=(e)=>{
        setPostData({...postData,[e.target.name]:e.target.value})
    }
    const clear=()=>{
        setPostData(initialState)
    }
    
  return (
    <section className='bg-a w-screen h-[88vh] flex items-center justify-center'>
        <div className='flex w-[80vw] shadow-1 rounded-xl'>
        <div className='bg-white w-1/2 h-[80vh] p-8 max-[850px]:w-full rounded-tl-xl rounded-bl-xl max-[850px]:rounded-xl'>
   
        <form 
        action=""
        autoComplete='off'
        noValidate
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 w-full h-full justify-center items-center'
        >
            <h1  className='text-center font-bold text-4xl mb-12'>Tạo Bài</h1>
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
            onChange={(e)=>setPostData({...postData,tags:e.target.value.split(',')})}
            color='secondary'
            className='bg-violet-100'
            />
            <div className="float-left">
            <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})} />

            </div>
            <div className='flex gap-4'>
            <button  type='submit' className='btn-grad light-btn'>Submit</button>
            <button type="button" className='btn-grad dark-btn' onClick={clear}>Clear</button>
            </div>
        </form>
    </div>
    <div className='bg-white w-1/2 h-[80vh] max-[850px]:hidden rounded-tr-xl rounded-br-xl'>
        <img src={create} alt=""  className='w-full h-full object-contain'/>
    </div>
    </div>
    </section>
  )
}

export default CreatePage
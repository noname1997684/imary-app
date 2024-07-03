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
        selectedFile:''
    }
    const user=JSON.parse(localStorage.getItem('profile'))
    const [postData,setPostData]=useState(post?post:initialState)
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
    <Paper elevation={6}>
        <form 
        action=""
        autoComplete='off'
        noValidate
        onSubmit={handleSubmit}
        >
            <Typography variant="h6">Sửa Bài</Typography>
            <TextField name="title" variant="outlined" label="Tiêu đề" fullWidth
            value={postData.title}
            onChange={handleChange}
            />
            <TextField name="message" variant="outlined" label="Nội dung" fullWidth
            value={postData.message}
            onChange={handleChange}
            />
            <TextField name="tags" variant="outlined" label="Nhãn dán" fullWidth
            value={postData.tags}
            onChange={(e)=>setPostData({...postData,tags:e.target.value.split(',')})}
            />
            <img src={post.selectedFile}/>
            <Button variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
            <Button variant='contained' color='secondary' size='small' fullWidth onClick={clear}>Clear</Button>
        </form>
    </Paper>
  )
}

export default UpadatedPage
import {React,useState} from 'react'
import { TextField,Button,Typography,Paper } from '@mui/material'
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../../actions/posts' 

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
    <Paper elevation={6}>
        <form 
        action=""
        autoComplete='off'
        noValidate
        onSubmit={handleSubmit}
        >
            <Typography variant="h6">Tạo Bài</Typography>
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
            <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})} />
            <Button variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
            <Button variant='contained' color='secondary' size='small' fullWidth onClick={clear}>Clear</Button>
        </form>
    </Paper>
  )
}

export default CreatePage
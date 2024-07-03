import {React, useState} from 'react'
import {Avatar,Button,Grid, Paper, Typography,Container} from '@mui/material'
import {MdLockOutline} from 'react-icons/md'
import Input from './Input'
import {Link,useNavigate} from 'react-router-dom'
import Logo from "../../images/logo.png"
import { useDispatch } from 'react-redux'
import { signin,signup } from '../../actions/auth'
import { GoogleLogin } from '@react-oauth/google'
import {jwtDecode} from 'jwt-decode'

const Auth = () => {

const initialState={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
}

    const [isSignup, setIsSignup] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const dispatch = useDispatch()
   const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(isSignup){
            dispatch(signup(formData,navigate))
        }else{
            dispatch(signin(formData,navigate))
        }
    }
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const switchMode=()=>{
        setIsSignup((prevIsSignup)=>!prevIsSignup)
        setShowPassword(false)
        setFormData(initialState)
    }
    const handleShowPassword=()=>{
        setShowPassword((prevShowPassword)=>!prevShowPassword)
    }
   
  return (
    <section>
        <nav className='flex mx-auto justify-between py-5 sm:px-6 lg:px-8 bg-white'>
      <div className='flex items-center gap-4'>
      <Link className='flex items-center cursor-pointer' to="/">
        <img src={Logo} 
      alt="logo"
      width="45px"
       height="45px" />
       <h1 className='font-extrabold'>IMARY</h1>
       </Link>
       <button className='button-hover-1 focus-1'>Trang Chủ</button>
      </div>
    </nav>
    <Container component="main" maxWidth="xs">
    

        <Paper elevation={3}>
            <Avatar>
                <MdLockOutline />
            </Avatar>

        <Typography variant='h5'>{isSignup ? "Đăng ký": "Đăng nhập"}</Typography>
        <form action="" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                {isSignup &&(
                    <>
                    <Input
                    name="firstName"
                    label="Họ"
                    value={formData.firstName}
                    handleChange={handleChange} 
                    autoFocus
                    half
                    />
                   <Input
                   name="lastName"
                   value={formData.lastName}
                   label="Tên"
                   handleChange={handleChange}
                   half
                   />
                    </>
                )
                }
                <Input
                name="email"
                label="Email"
                value={formData.email}
                handleChange={handleChange}
                type="email"
                />
                <Input
                name="password"
                label="Password"
                value={formData.password}
                handleChange={handleChange}
                type={showPassword?'text':'password'}
                handleShowPassword={handleShowPassword}
                />
                {isSignup && (
                    <Input
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    label="Repeat Password"
                    handleChange={handleChange}
                    type="password"
                    />
                )}
            </Grid>

            <Button type='submit' fullWidth variant='contained' color="primary">
                {isSignup ? "Đăng ký": "Đăng Nhập"}
            </Button>
<GoogleLogin
onSuccess={res=>{
    const token=res.credential
    const result= jwtDecode(token)
    try{
        dispatch({type:'AUTH',payload:{result,token}})
        navigate('/posts')
    }catch(err){
        console.log(err)
    
    }
}}
/>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Button onClick={switchMode}>
                        {isSignup ?
                    "Đã có tài khoản ? Đăng nhập":
                    "Chưa có tài khoản ? Đăng ký"    
                    }
                    </Button>
                </Grid>
            </Grid>
        </form>
        </Paper>
    </Container>
</section>
  )
}

export default Auth
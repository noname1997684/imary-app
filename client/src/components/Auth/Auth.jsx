import {useState} from 'react'
import { Grid } from '@mui/material'
import Input from './Input'
import { Link,useNavigate } from 'react-router-dom'
import Logo from "../../assets/logo.png"
import { useDispatch } from 'react-redux'
import {signin,signup} from '../../actions/auth'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import loginImg from "../../assets/login.jpg"
import { useRecoilState } from 'recoil'
import { AuthStateAtom } from '../../atoms/authAtom'
const Auth = () => {
    const initialState={
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    }
    
        // const [isSignup, setIsSignup] = useState(false)
        const [authStateValue,setAuthStateValue] = useRecoilState(AuthStateAtom)
        const [showPassword, setShowPassword] = useState(false)
        const [formData, setFormData] = useState(initialState)
        const dispatch = useDispatch()
       const navigate = useNavigate()
        const handleSubmit=(e)=>{
            e.preventDefault()
            if(authStateValue === 'signup'){
                dispatch(signup(formData,navigate))
            }else{
                dispatch(signin(formData,navigate))
            }
        }
        const handleChange=(e)=>{
            setFormData({...formData,[e.target.name]:e.target.value})
        }
        const switchMode=()=>{
            setAuthStateValue((prev)=>prev==='login'?'signup':'login')
            setShowPassword(false)
            setFormData(initialState)
        }
        const handleShowPassword=()=>{
            setShowPassword((prevShowPassword)=>!prevShowPassword)
        }
       
      return (
        <section className='bg-a h-screen '>
            <nav className='flex mx-auto justify-between py-5 sm:px-6 lg:px-8 bg-inherit '>
          <div className='flex items-center gap-4'>
          <Link className='flex items-center cursor-pointer' to="/">
            <img src={Logo} 
          alt="logo"
          width="45px"
           height="45px" />
           <h1 className='font-extrabold'>IMARY</h1>
           </Link>
    
           <Link className='button-hover-1 focus-1' to="/">Trang Chủ</Link>
          </div>
        </nav>
        <div className='flex w-[96vw] mx-auto h-[90vh]  justify-center'>
        <div className='w-1/2 h-[80vh] bg-white p-6 flex items-center justify-center flex-col max-[910px]:w-3/4'>
    
            <h1 className='text-center font-bold text-4xl'>{authStateValue==="signup" ? "Đăng ký": "Đăng nhập"}</h1>
            <form action="" onSubmit={handleSubmit} className='mt-9 flex flex-col justify-center items-center'>
                <Grid container spacing={2}>
                    {authStateValue==="signup" &&(
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
                    {authStateValue==="signup" && (
                        <Input
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        label="Repeat Password"
                        handleChange={handleChange}
                        type="password"
                        />
                    )}
                </Grid>
    
                <button type='submit' className='mt-7 btn-grad light-btn'>
                    {authStateValue==="signup" ? "Đăng ký": "Đăng Nhập"}
                </button>
    <GoogleLogin
    className="w-100vw"
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
                        <button onClick={switchMode} className='mt-4 text-violet-400'>
                            {authStateValue==="signup" ?(
                        <h1>Đã có tài khoản ? <span className='font-bold'>Đăng nhập</span></h1>):
                        (<h1>Chưa có tài khoản ? <span className='font-bold'> Đăng ký</span></h1>)   
                        }
                        </button>
                    </Grid>
                </Grid>
            </form>
            
        </div>
        <div className='lg:w-4/6 h-[80vh] bg-white max-[910px]:hidden'>
            <img src={loginImg} alt=""  className='object-cover w-full h-full scale-75 lg:scale-90 xl:scale-100'/>
        </div>
    </div>
    </section>
      )
}

export default Auth
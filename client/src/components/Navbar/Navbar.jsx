import {React,useEffect,useState} from 'react'
import Logo from '../../images/logo.png'
import { useLocation,Link,useNavigate } from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'
import {googleLogout} from '@react-oauth/google'
import {useDispatch} from 'react-redux'
import {Avatar} from '@mui/material'
import SearchBox from './SearchBox'
const Navbar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location = useLocation()
  const path= location.pathname === '/auth'
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')))
  const page= user? "/posts":"/"
  useEffect(()=>{
    const token= user?.token
    if(token){
      const decodedToken=jwtDecode(token)
      if(decodedToken.exp *1000< new Date().getTime()){

      }

    
    }
    setUser(JSON.parse(localStorage.getItem('profile')))
    

  },[location])
  
  const logout=()=>{
    dispatch({type:'LOGOUT'})
    googleLogout()
    setUser(null)
    navigate('/')
  }

  if(path) return null

  return (
     
      <nav className='flex mx-auto justify-between py-5 sm:px-6 lg:px-8 bg-white static top-0 left-0 w-full z-50 rounded-bl-2xl rounded-br-2xl'>
      <div className='flex items-center gap-4'>
      <Link className='flex items-center cursor-pointer' to={page}>
        <img src={Logo} 
      alt="logo"
      width="45px"
       height="45px" />
       <h1 className='font-extrabold'>IMARY</h1>
       </Link>
       <button className='button-hover-1 focus-1' onClick={()=>{navigate('posts')}}>{user?'Trang Chủ':'Khám Phá'}</button>
       {user &&(
          <Link to="/create" className='button-hover-1 focus-1'>Tạo</Link>
                
       )}
      </div>
      {user &&(
        
          <SearchBox/>
        
      
      )}
      {user ?(
        <div className='gap-2 flex items-center'>
          <Avatar alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
          <h2 className='text-xl font-semibold'>{user.result.name}</h2>
          <button onClick={logout} className='bg-red-600 text-white px-3 py-2 rounded-full ml-4 font-bold hover:bg-red-700 focus-1 focus:bg-red-700'>Đăng xuất</button>
        </div>
      ):(
      <div className='gap-2 flex'>
        <Link to="/auth" className='text-white bg-red-600 hover:bg-red-700 rounded-full px-2.5 py-2 focus-1 font-semibold focus:bg-red-700'>Đăng Nhập</Link>
        <button className='bg-gray-200 hover:bg-gray-300 rounded-full px-2.5 py-2 focus-1 font-semibold'>Đăng ký</button>
      </div>
      )}
     
    
    </nav>
    
  )}
    
 

export default Navbar
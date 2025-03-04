import { useEffect,useState } from "react";
import Logo from "../../assets/logo.png";
import { useLocation,Link,useNavigate } from "react-router-dom";
import {jwtDecode} from 'jwt-decode'
import {googleLogout} from "@react-oauth/google"
import {useDispatch} from "react-redux"
import {Avatar} from "@mui/material"
import SearchBox from "./SearchBox"
import {IoIosLogOut,IoMdHome,IoMdCreate} from "react-icons/io"
import {IoMenu} from "react-icons/io5"
import {AuthStateAtom} from "../../atoms/authAtom"
import { useSetRecoilState} from "recoil"

const Navbar = () => {
    const setAuthStateValue=useSetRecoilState(AuthStateAtom)
    
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const location = useLocation()
    const path= location.pathname === '/auth'
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')))
    const page= user? "/posts":"/"
    const [hidden,setHidden]=useState(true)
    const [hiddenMenu,setHiddenMenu]=useState(true)
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
       
        <nav className='flex mx-auto justify-between py-5 px-6 lg:px-8 bg-white static top-0 left-0 w-full z-50 rounded-bl-2xl rounded-br-2xl'>
        <div className='flex items-center gap-4'>
          <div className='min-[530px]:hidden relative'>
            <IoMenu className='text-3xl cursor-pointer' onClick={()=>setHiddenMenu(pre=>!pre)}/>
            
              <ul className={`absolute w-52 bg-white font-bold text-xl p-5 z-50 flex flex-col gap-4 shadow-1 top-12 -left-4 ${hiddenMenu?'reverseMenu':'moveMenu'}`}>
                <li onClick={()=>{
                  navigate('posts')
                  setHiddenMenu(true)
                  }}
                 className='cursor-pointer flex items-center gap-4 p-2 hover:bg-slate-100 rounded-md'>
                  <IoMdHome className='text-2xl '/>
                  <h1 >Trang chủ</h1>
                </li>
                <li onClick={()=>{
                  navigate('/create')
                  setHiddenMenu(true)
                  }}
                className=' cursor-pointer flex items-center gap-4 p-2 hover:bg-slate-100 rounded-md'>
                  <IoMdCreate className='text-2xl'/>
                  <h1>Tạo</h1>
                </li>
              </ul>
            
          </div>
        <Link className='flex items-center cursor-pointer' to={page}>
          <img src={Logo} 
        alt="logo"
        width="45px"
         height="45px" />
         <h1 className='font-extrabold'>IMARY</h1>
         </Link>
         <button className='button-hover-1 focus-1 max-[530px]:hidden' onClick={()=>{navigate('posts')}}>{user?'Trang Chủ':'Khám Phá'}</button>
         {user &&(
            <Link to="/create" className='button-hover-1 focus-1 max-[530px]:hidden'>Tạo</Link>
                  
         )}
        </div>
        {user &&(
          
            <SearchBox/>
          
        
        )}
        {user ?(
          <div className='flex items-center'>
          <div className='gap-2 flex items-center max-[910px]:hidden'>
            <Avatar alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
            <h2 className='text-xl font-semibold'>{user.result.name}</h2>
            <button onClick={logout} className='bg-red-600 text-white px-3 py-2 rounded-full ml-4 font-bold hover:bg-red-700 focus-1 focus:bg-red-700'>Đăng xuất</button>
          </div>
          <div className='min-[910px]:hidden relative'>
            <button onClick={()=>setHidden(pre=>!pre)}>
          <Avatar alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
          </button>
          <div className={`shadow-1 flex flex-col justify-center absolute top-14 bg-white w-fit -left-52 p-3 z-50 ${hidden?'reverse':'move'}`}>
            <div className='flex items-center gap-2 mb-4 p-4 rounded-xl shadow-1'>
          <Avatar alt={user.result.name} src={user.result.picture}>{user.result.name.charAt(0)}</Avatar>
          <h2 className='text-xl font-semibold w-40'>{user.result.name}</h2>
          </div>
          <div className='flex items-center gap-5 px-2 py-2 rounded-md hover:bg-slate-100'>
            <IoIosLogOut className='text-3xl'/>
            <button className='font-bold text-lg' onClick={logout}>Đăng xuất</button>
          </div>
          
          </div>
          </div>
          </div>
        ):(
        <div className='gap-2 flex'>
          <Link to="/auth" className='text-white bg-red-600 hover:bg-red-700 rounded-full px-3 py-2 focus-1 font-semibold focus:bg-red-700' onClick={()=>setAuthStateValue('login')}>Đăng Nhập</Link>
          <Link to="/auth" className='bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-2 focus-1 font-semibold' onClick={()=>setAuthStateValue("signup")}>Đăng ký</Link>
        </div>
        )}
       
      
      </nav>
      
    )}
      
   
  
  export default Navbar
import { useEffect,useState } from "react"
import { BrowserRouter,Route,Routes,Navigate,Link } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Auth from "./components/Auth/Auth"
import Posts from "./components/Posts/Posts"
import CreatePage from "./components/CreatePage/CreatePage"
import PostsDetail from "./components/PostsDetail/PostsDetail"
import UpadatedPage from "./components/UpdatedPage/UpdatedPage"

function App() {
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')))
  console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID)
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/search" element={<Posts />} />
          <Route path="/create" element={<CreatePage/>}/>
          <Route path='/posts/:id' element={<PostsDetail/>}/>
          <Route path='/update/:id' element={<UpadatedPage/>}/>
          <Route path='/auth' element={user?(
        <div className='flex flex-col gap 3'>
      <h1>Đã đăng nhập Vui lòng trở lại trang chủ</h1>
      <Link to="/" className='bg-red-600 text-white px-3 py-2 rounded-full ml-4 font-bold hover:bg-red-700 focus-1 focus:bg-red-700 mt-3 w-fit'>
      Trang chủ
      </Link>
      </div>
     )
      :<Auth/>}/>
        </Routes>
        
      </BrowserRouter>

    </GoogleOAuthProvider>
  )
}

export default App

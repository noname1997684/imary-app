import {React,useState,useEffect,useRef} from 'react'
import { FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {getPostsBySearch} from '../../actions/posts'
import {useNavigate,useLocation} from 'react-router-dom'
import { BsXCircleFill } from "react-icons/bs";
const SearchBox = () => {
    const dispatch=useDispatch()
    const [search,setSearch]=useState('')
    const location=useLocation()
    const [focus,setFocus]=useState(false)
    
   
    useEffect(()=>{
        if(!location.search){
            setSearch('')
        }
    },[location])

    const navigate=useNavigate()
    const handleKeyPress=(e)=>{
        if(e.keyCode===13){
            searchPost()
        }
    }
    const searchPost=()=>{
        if(search.trim()){
            dispatch(getPostsBySearch({search,tags:[]}))
            navigate(`/posts/search?searchQuery=${search||'none'}`)
        }
        else{
            navigate('/posts')
        }
    }
    const clear=()=>{
        setSearch('')
        navigate('/posts')
    }
  return (
    <section className='w-[50vw]'
    onFocus={()=>{setFocus(true)}}
            onBlur={()=>{setFocus(false)}}>
        <div className='w-full h-full bg-gray-100 flex items-center px-4 py-4 gap-2 rounded-full' >
           {!focus && (<FaSearch className='text-xl text-gray-500'/>)} 
            <input 
            
            type="text" 
            className='bg-inherit outline-none border-none w-full h-full' 
            placeholder='Tìm kiếm'
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
            onKeyDown={handleKeyPress}/>
            {search &&(
                <button onClick={clear} className='z-[100]'>
                <BsXCircleFill />
               
                </button>
            )}
                
                
        </div>
    </section>
  )
}

export default SearchBox
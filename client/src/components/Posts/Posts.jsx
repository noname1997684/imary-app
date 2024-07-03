import {React,useEffect} from 'react'
import {Grow} from '@mui/material'
import PostsGrid from './PostGrid'
import { useDispatch } from 'react-redux'

import Pagination from './Pagination'
import {useLocation} from 'react-router-dom'
const Posts = () => {
const dispatch=useDispatch()

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

const query=useQuery()
const page=query.get('page')||1
const searchQuery=query.get('searchQuery')

    
  return (
    <Grow in>
        <section  className='bg-g w-full h-full p-4'>
           {!searchQuery && <Pagination page={page}/>} 
                <div className='p-5'>
                    <PostsGrid />
                </div>
        </section>
    </Grow>
  )
}

export default Posts
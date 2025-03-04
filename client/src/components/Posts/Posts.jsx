import React from 'react'
import { Grow } from '@mui/material'
import PostGrid from './PostGrid'
import Pagination from './Pagination'
import { useLocation } from 'react-router-dom'
const Posts = () => {
    function useQuery(){
        return new URLSearchParams(useLocation().search)
    }
    const query=useQuery()
    const page=query.get('page')||1
    const searchQuery=query.get('searchQuery')
    const tags= query.get('tags')
    console.log(searchQuery,page,tags)
      return (
          <Grow in>
            <section  className='bg-g w-full h-full p-4'>
               <Pagination page={page} search={searchQuery} tags={tags}/> 
                    <div className='p-5'>
                        <PostGrid />
                    </div>
            </section>
        </Grow>
        )
        
    
}

export default Posts
import {React,useEffect} from 'react'
import { Pagination,PaginationItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { getPosts } from '../../actions/posts'
import { useDispatch,useSelector } from 'react-redux'
const Paginate = ({page}) => {
  const {numberOfPages}= useSelector((state)=>state.posts)
  const dispatch=useDispatch()

  useEffect(()=>{
    if(page) dispatch(getPosts(page))
  },[page])

  return (
    <Pagination
    className='w-full h-10 flex justify-center items-center gap-2'
        count={numberOfPages}
        classes={{ul:'justify-around'}}
        page={Number(page)||1}
        size='large'
        color='primary'
        renderItem={(item)=>(
            <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`}/>
  )
        }
    />
  )
}

export default Paginate
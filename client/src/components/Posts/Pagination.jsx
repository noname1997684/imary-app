import {useEffect} from 'react'
import {Pagination,PaginationItem} from "@mui/material"
import {Link} from "react-router-dom"
import {getPosts} from "../../actions/posts"
import {useDispatch,useSelector} from "react-redux"
const Paginate = ({page,search,tags}) => {
    
     const {numberOfPages}= useSelector((state)=>state.posts)
     const dispatch=useDispatch()
   
     useEffect(()=>{
       if(tags){
         dispatch(getPosts(page,{search,tags:tags.split(',')}))
         return
       }
       if(page) dispatch(getPosts(page,{search,tags:[]}))
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
               <PaginationItem {...item} component={Link} to={search ===null ?`/posts?page=${item.page}`: `/posts/search?page=${item.page}&searchQuery=${search}`}/>
     )
           }
       />
     )
   }
   
   export default Paginate
import {FETCH_BY_SEARCH,COMMENT,FETCH_POST,CREATE,FETCH_ALL,DELETE,UPDATE,LOADING_START,LOADING_END} from '../constant/index.js'

export default (state={isLoading:true,posts:[]},action)=>{
    switch (action.type) {
        case CREATE:
            return {
                ...state,
                posts:[...state.posts,action.payload]
            }
            
        case FETCH_ALL:
            return{
                ...state,
                posts:action.payload.data,
                currentPage:action.payload.currentPage,
                numberOfPages:action.payload.numberOfPages

            }
        case UPDATE:
            return{
                ...state,
                posts:state.posts.map((post)=>post._id===action.payload._id?action.payload:post)
            }
        case DELETE:
            return{
                ...state,
                posts:state.posts.filter((post)=>post._id!==action.payload)
            }
        case LOADING_START:
            return{
                ...state,
                isLoading:true
            }
        case LOADING_END:
            return{
                ...state,
                isLoading:false
            }
        case FETCH_POST:
           return {
              ...state,
                post:action.payload
            }
        case COMMENT:
            
            return {
                ...state,
                posts:state.posts.map((post)=>post._id===action.payload._id?action.payload:post)
            }
        case FETCH_BY_SEARCH:
            return{
                ...state,
                posts:action.payload
            }
        default:
           return state
    }
}

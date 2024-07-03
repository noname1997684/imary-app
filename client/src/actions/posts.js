import * as api from '../api/index.js';
import {FETCH_BY_SEARCH,COMMENT,CREATE,FETCH_ALL,DELETE,UPDATE,LOADING_END,LOADING_START,FETCH_POST} from '../constant/index.js'

export const getPosts=(page)=>async(dispatch)=>{
    try{
        dispatch({type:LOADING_START})
        const {data}= await api.fetchPosts(page)
        
        dispatch({type:FETCH_ALL,payload:data})
        dispatch({type:LOADING_END})
    }catch(error){
        console.log(error)
    }
}

export const createPost=(post,navigate)=>async(dispatch)=>{
    try{
        const {data}= await api.createPost(post)
        dispatch({type:CREATE,payload:data})
        navigate('/posts')
    }catch(error){
        console.log(error)
    }
}

export const updatedPost =(id,post,navigate)=>async(dispatch)=>{
    try {
        const {data}= await api.updatedPost(id,post)
        dispatch({type:UPDATE,payload:data})
        navigate(`/posts`)
    } catch (error) {
        console.log(error)
    }
}

export const deletePost=(id)=>async(dispatch)=>{
    try{
await api.deletePost(id)
dispatch({type:DELETE,payload:id})
    }
    catch(error){
        console.log(error)
    }
}

export const likePost=(id)=>async(dispatch)=>{
    try{
        const {data}= await api.likePost(id)
        dispatch({type:UPDATE,payload:data})
    }catch(error){
        console.log(error)
    }
}

export const getPost=(id)=>async(dispatch)=>{
    try {
        dispatch({type:LOADING_START})
        const{data}= await api.fetchPost(id)
        dispatch({type:FETCH_POST,payload:data})
        dispatch({type:LOADING_END})
    } catch (error) {
        console.log(error)
    }
}
export const commentPost=(value,id)=>async(dispatch)=>{
    try{
        const {data}= await api.commentPost(value,id)
        dispatch({type:COMMENT,payload:data})
        return data.comments
    }
    catch(error){
        console.log(error)
    }
}

export const getPostsBySearch=(searchQuery)=>async(dispatch)=>{
    try{
        dispatch({type:LOADING_START})
        const {data:{data}}= await api.fetchPostsBySearch(searchQuery)
        dispatch({type:FETCH_BY_SEARCH,payload:data})
        dispatch({type:LOADING_END})
    }
    catch(error){
        console.log(error)
    }
}


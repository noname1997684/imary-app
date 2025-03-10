import axios from "axios"

const API= axios.create({baseURL:import.meta.mode==="development" ?'http://localhost:5000':"/"})
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})


export const fetchPostsBySearch=(searchQuery)=>API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
export const fetchPost=(id)=>API.get(`/posts/${id}`)
export const signIn=(formData)=>API.post('/user/signin',formData)
export const signUp=(formData)=>API.post('/user/signup',formData)
export const createPost=(post)=>API.post('/posts',post)
export const fetchPosts=(page,searchQuery)=>API.get(`/posts?page=${page}&searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
export const updatedPost=(id,post)=>API.patch(`/posts/${id}`,post)
export const deletePost=(id)=>API.delete(`/posts/${id}`)
export const likePost=(id)=>API.patch(`/posts/${id}/likePost`)
export const commentPost=(value,id)=>API.post(`/posts/${id}/commentPost`,{value})
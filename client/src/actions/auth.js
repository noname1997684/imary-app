import * as api from '../api/index.js'
import {AUTH} from '../constant/index.js'

export const signin=(formData,navigate)=>async(dispatch)=>{
    try{
        const {data}=await api.signIn(formData)
        dispatch({type:AUTH,payload:data})
        navigate('/posts') 
    }
    catch(err){
        console.log(err)
    }
}

export const signup=(formData,navigate)=>async(dispatch)=>{
    try{
        const {data}=await api.signUp(formData)
        dispatch({type:AUTH,payload:data})
        navigate('/posts') 
    }
    catch(err){
        console.log(err)
    }
}
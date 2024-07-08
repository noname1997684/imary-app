import React from 'react'
import { TextField,Grid, InputAdornment,IconButton } from '@mui/material'
import { MdVisibility,MdVisibilityOff,MdLockOutline, MdOutlineEmail} from 'react-icons/md'
import { FaRegUser } from "react-icons/fa";
const Input = ({half,name,handleChange,label,autoFocus,type,handleShowPassword,value}) => {
  return (
    <Grid item xs={12} sm={half ? 6:12}>
        <TextField
        name={name}
        type={type}
        onChange={handleChange}
        autoFocus={autoFocus}
        xs={6}
        value={value}
        variant='outlined'
        color='secondary'
        fullWidth
        label={label}
        className='bg-violet-100'
        InputProps={name==='password'?{
            startAdornment:(
                <InputAdornment position='start'>
                    <MdLockOutline className='font-bold text-2xl'/>
                </InputAdornment>
            ),
            endAdornment:(
                <InputAdornment position='end'>
                    <IconButton onClick={handleShowPassword}>
                        {type==='password'?<MdVisibility/>:<MdVisibilityOff/>}
                    </IconButton>
                </InputAdornment>
            )
        }: name==='email'?{
            startAdornment:(
                <InputAdornment position='start'>
                    <MdOutlineEmail className='font-bold text-xl'/>
                </InputAdornment>
            )
        }:name==='confirmPassword'?{
            startAdornment:(
                <InputAdornment position='start'>
                    <MdLockOutline className='font-bold text-2xl'/>
                </InputAdornment>
            )
        }:{
             startAdornment:(
                <InputAdornment position='start'>
                    <FaRegUser className='font-bold text-xl'/>
                </InputAdornment>
            )
        }}
        />
    </Grid>
  )
}

export default Input
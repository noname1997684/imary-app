import React from 'react'
import { TextField,Grid, InputAdornment,IconButton } from '@mui/material'
import { MdVisibility,MdVisibilityOff } from 'react-icons/md'
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
        fullWidth
        label={label}
        InputProps={name==='password'?{
            endAdornment:(
                <InputAdornment position='end'>
                    <IconButton onClick={handleShowPassword}>
                        {type==='password'?<MdVisibility/>:<MdVisibilityOff/>}
                    </IconButton>
                </InputAdornment>
            )
        }:null}
        />
    </Grid>
  )
}

export default Input
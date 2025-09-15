
import { Box, Button, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {
    var[input,setInput] =useState({})
    const inpuHandler =(e)=>{
        // console.log(e.target.value);
        setInput({...input,[e.target.name]:e.target.value})
        console.log(input)
    }

  return (
    <div>
      <Box
        sx={{
            padding:2,
            backgroundColor:"White",
            boarderRadius:2,
            marginRight:30,
            marginLeft:30,
            marginTop:5,
            boxShadow:3
        }}>
        <Typography variant='h4' color='emerald'gutterBottom>Login</Typography>  
        <TextField 
        fullWidth
        label='Fullname'
        variant='outlined'
        margin='normal'
        name='fname'
        
        onChange={inpuHandler}>
        </TextField>

        <TextField 
        fullWidth
        label='Email'
        variant='outlined'
        margin='normal'
        name='ename'
       
        onChange={inpuHandler}
        >
        </TextField>

        <TextField 
        fullWidth
        label='Password'
        variant='outlined'
        margin='normal'
        name='password'
       
        onChange={inpuHandler}>
        </TextField>
        <Button   
        fullWidth 
        variant="contained"
        color='secondary'>
        Login
        </Button><br /><br />
        <Typography
              variant='body2'
              align='center'
              sx={{marginTop:"1rem",
                color:"text.secondary"}}>
                  Don't have an account?{" "}
                  <Link href='/' underline='hover' color='secondary'>Signup</Link>
              </Typography>
      </Box>
    </div>
  )
}

export default Login
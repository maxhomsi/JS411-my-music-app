

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';




// import {useState} from 'react'



export default function LoginCreate(props) {

  return (
    <div> 
         
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        justifyContent: "center"
      }}
      noValidate
      autoComplete="off"
    >
      <TextField variant="outlined"  label="E-Mail" type="email" sx={{color:"black"}}  />
      <TextField variant="filled" label="Password" type="password" />

      <Stack className='log1' direction="row"  justifyContent="center" spacing={2}  >
      <Button variant="contained" sx={{backgroundColor:"blue"}} onClick={props.login}>Login</Button>
      <Button variant="contained" sx={{backgroundColor:"black"}}>Create Account</Button>
      
    </Stack>
      
    </Box></div>
   
  );
}
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container, { containerClasses } from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { API_HOST, API_GET_DATA } from "../../../global/constants"
import { PostData, user} from '../../../global/constants';
import Alert from '@mui/material/Alert';


const theme = createTheme();

export default function SignUp() {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newuser = user;
    newuser['username'] = data.get('username');  //check long 5-15
    newuser['password'] = data.get('password');   //check long 5-15
   
    if(newuser['username'].length < 5 || newuser['username'].length > 15)
        

    //转换填进去的内容
    console.log(newuser);
    //post to backend
    PostData( newuser );

    // if (newuser)
    // setIsLogin(newuser)
    // navigateto('profile')
    // else return
 
  };

  const Success = () => {  
     <Alert severity="success">login success!</Alert>
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{ marginTop: 8,display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="pseudo"
                  label="Username"
                  name="pseudo"
                  autoComplete="pseudo"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
				          required
                  fullWidth
                  name="password1"
                  label="Password"
                  // type="password1"
                  id="password1"
                  autoComplete="password1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
				          required
                  fullWidth
                  name="password2"
                  label="confirme password"
                  type="password2"
                  id="password2"
                  autoComplete="password2"
                />
              </Grid>
            </Grid>
            <Button type="submit" onClick={Success} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up</Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
